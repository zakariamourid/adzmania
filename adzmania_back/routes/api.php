<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TestController;
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
            'email' => $request->user()->email,
            'phone' => $request->user()->phone,
        ]
    );
});

// Route::middleware('auth:sanctum')->get('/orders',[OrderController::class,'orders']);
// Route::middleware('auth:sanctum')->delete('/order',[OrderController::class,'destroy']);
// Route::middleware('auth:sanctum')->post('/orders',[OrderController::class,'store']);
// order apiresource protefted by sanctum
Route::apiResource('orders', OrderController::class)->middleware('auth:sanctum');
Route::post("login", [AuthController::class, 'login']);
Route::post("signup", [AuthController::class, 'signup']);
Route::post("logout", [AuthController::class, 'logout']);
Route::get("test", [TestController::class, 'test']);