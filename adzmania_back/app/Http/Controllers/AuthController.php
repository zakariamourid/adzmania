<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate(
            [
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]
            );
        if(!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid login credentials',
            ], 401);

        }
        $user=Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        return response([
            'user' => [
                "email"=> $user->email,
                "firstName"=> $user->first_name,
                "lastName"=> $user->last_name,
                
                "phone"=> $user->phone,
            ],
                'token' => $token,
        ]);
}
    public function signup(Request $request)
    {
       try{ $credentials=$request->validate(
            [
                'first_name' => ['required'],
                'last_name' => ['required'],
                'email' => ['required', 'email', 'unique:users'],
                'password' => ['required','min:8'],
                'phone' => ['required','min:10','unique:users']
            ]
            );
        }catch (ValidationException $exception) {
            return response()->json(['errors' => $exception->errors()], 422);
            }

            // handle if request is not valid
           $user= User::create([
                'first_name' => $credentials['first_name'],
                'last_name' => $credentials['last_name'],
                'email' => $credentials['email'],
                'phone' => $credentials['phone'], 
                'password' => bcrypt($credentials['password']),
            ]);
        
        
            
            return response([
                
                'user' => $user,
                'token' => $user->createToken('token')->plainTextToken,
            ]);
            
            
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logged out',
        ]);
        
    }
}