<?php

use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return (
        [
            'firstName' => $request->user()->first_name,
            'lastName' => $request->user()->last_name,
            'role'=> $request->user()->role,
            'email' => $request->user()->email,
            'phone' => $request->user()->phone,
        ]
    );
});

Route::apiResource('orders', OrderController::class)->middleware('auth:sanctum');
Route::middleware(['auth:sanctum', 'role'])->group(function () {
    Route::apiResource('admin/orders', AdminOrderController::class);
    Route::apiResource('admin/users', AdminUserController::class);
});
Route::middleware(['auth:sanctum'])->group(function () {
    Route::put('user', [UserController::class,'update']);
});

Route::post("login", [AuthController::class, 'login']);
Route::post("signup", [AuthController::class, 'signup']);
Route::post("logout", [AuthController::class, 'logout']);