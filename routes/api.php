<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerManage\CustomerController;
use App\Http\Controllers\StaffManage\StaffController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password', [AuthController::class, 'sendForgotPasswordEmail']);
Route::post('/password/reset', [AuthController::class, 'resetPassword']);
Route::get('/datas', [StaffController::class, 'initDatas']);

Route::post('/staff/register', [StaffController::class, 'createOrUpdate']);
Route::post('/staff/info', [StaffController::class, 'index']);
Route::post('/staff/exit', [StaffController::class, 'destroy']);

Route::post('/customer/register', [CustomerController::class, 'createOrUpdate']);
Route::post('/customer/list', [CustomerController::class, 'index']);
Route::post('/customer/delete', [CustomerController::class, 'destroy']);
