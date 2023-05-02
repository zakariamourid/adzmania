<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\LogoutRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
        public function login(LoginRequest $request)
        {
        $credentials=$request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message'=>'Invalid Credentials'
            ]);
        }
        $user=Auth::user();
        $token=$user->createToken('auth_token')->plainTextToken;
        return response(compact('user','token'));
       
           
        }
        public function signup(SignupRequest $request)
        {
        $data =$request->validated();
        $user= new User();
        $user->name=$data['name'];
        $user->email=$data['email'];
        $user->password=bcrypt($data['password']);
        $user->save();
        $token=$user->createToken('auth_token')->plainTextToken;
        // handle error
        return 
        response(
            [
                'user'=>$user,
                'token'=>$token
            ]
        );
           
        }
        public function logout(LogoutRequest $request)
        {   
            /** @var User $user \App\Models\User */
            $user=$request->user();
           $user=$user->currentAccessToken()->delete();
           return response('',204);
        }
        public function getUsers()
        {
            // clear table
             
            return User::all();

        }
    
}