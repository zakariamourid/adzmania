<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        // 
    }

  
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */


public function update(Request $request)
{
    $data = $request->validate([
        'first_name' => ['required'],
        'last_name' => ['required'],
        'phone' => ['required', 'min:10'],
        'old_password' => ['nullable', 'min:8'],
        'new_password' => ['nullable', 'min:8'],
    ]);

    $user = $request->user();
    $newPassword = $data['new_password'];

    if ($newPassword) {
        if ($data['old_password']) {
            if (!Hash::check($data['old_password'], $user->password)) {
                return response()->json([
                    'message' => 'Old password is incorrect.',
                ], 401);
            }
        } else {
            return response()->json([
                'message' => 'Please provide the old password.',
            ], 400);
        }

        $user->password = bcrypt($data['new_password']);
    }

    $user->update([
        'first_name' => $data['first_name'],
        'last_name' => $data['last_name'],
        'phone' => $data['phone'],
    ]);

    return response()->json([
        'message' => 'User updated successfully.',
    ], 200);
}




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}