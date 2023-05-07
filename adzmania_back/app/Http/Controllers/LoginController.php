<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate(
            [
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]
            );
        if(auth()->attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json([
                "email"=> Auth::user()->email,
                "name"=> Auth::user()->name,
                "phone"=> Auth::user()->phone,
                'token' => Auth::user()->createToken('token')->plainTextToken,
                'message' => 'Logged in',
            ]);
        }else{
            return response()->json([
                'message' => 'Invalid login credentials',
            ], 401);
        }
    }
     public function signup(Request $request)
    {
        $credentials = $request->validate(
            [
                'name' => ['required'],
                'email' => ['required', 'email', 'unique:users'],
                'password' => ['required','min:8'],
                'phone' => ['required','min:10','unique:users'],
            ]
            );
            $credentials['password'] = bcrypt($credentials['password']);
            $user = \App\Models\User::create($credentials);
            return $user;
    }
    public function logout(Request $request)
    {
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'Logged out',
        ]);
       
    }
    public function user(Request $request)
    {
        return Auth::user();
    }
   
    
   
}