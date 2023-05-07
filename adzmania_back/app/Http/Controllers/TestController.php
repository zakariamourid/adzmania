<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(Request $request)
    {
        $request->validate(
            [
                'name' => ['required'],
                
            ]
            );
        return response()->json([
            'message' => $request->name,
        ]);
    }
}