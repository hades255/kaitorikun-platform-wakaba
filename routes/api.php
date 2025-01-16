<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerManage\CustomerController;
use App\Http\Controllers\StaffManage\StaffController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostReactionController;
use App\Http\Controllers\PostReplyController;
use App\Http\Controllers\InvitationController;

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

Route::get('channels/getPublic', [ChannelController::class, 'getPublic'])->name('channels.getPublic');
Route::get('channels/{channel}', [ChannelController::class, 'show'])->name('channels.show')->where('channel', '[0-9]+');;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('channels', [ChannelController::class, 'store'])->name('channels.store');
    Route::get('channels/getMine', [ChannelController::class, 'getMine'])->name('channels.getMine');
    Route::get('channels/getWorking', [ChannelController::class, 'getWorking'])->name('channels.getWorking');

    Route::post('posts', [PostController::class, 'store'])->name('posts.store');

    Route::post('postreply', [PostReplyController::class, 'store'])->name('postreply.store');
    Route::post('postreaction', [PostReactionController::class, 'store'])->name('postreaction.store');
    Route::post('postreaction/toggle', [PostReactionController::class, 'toggle'])->name('postreaction.toggle');
});
