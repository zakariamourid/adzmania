<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
     public function index(Request $request )
    {
        $users=User::all();
        return $users;
       
    } 
}