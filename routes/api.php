<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalendarEventController;
use App\Http\Controllers\CustomerManage\CustomerController;
use App\Http\Controllers\CustomerManage\PurchaseController;
use App\Http\Controllers\StaffManage\StaffController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostReactionController;
use App\Http\Controllers\PostReplyController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\SChannelController;
use App\Http\Controllers\UserController;
use App\Mail\CommunityInvitationEmail;
use Illuminate\Support\Facades\Mail;

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

Route::get('/send-email', function () {
    Mail::to('montgasam@gmail.com')->send(new CommunityInvitationEmail());

    return response()->json(["msg" => 'Email sent successfully!']);
});

Route::post("/upload", [FileUploadController::class, 'update']);

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

Route::get('/purchase/init-register', [PurchaseController::class, 'initRegister']);
Route::post('/purchase/leave-items-register', [PurchaseController::class, 'leaveItemsRegister']);
Route::post('/purchase/update', [PurchaseController::class, 'update']);

Route::post('/invitations/{id}/view', [InvitationController::class, 'view'])->name('invitations.view');
Route::post('/invitations/{id}/accept', [InvitationController::class, 'accept'])->name('invitations.accept');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('communities', [CommunityController::class, 'store'])->name('communities.store');
    Route::get('communities/mine', [CommunityController::class, 'getMine'])->name('communities.getMine');
    Route::get('communities/joined', [CommunityController::class, 'getWorking'])->name('communities.getWorking');
    Route::get('communities/public', [CommunityController::class, 'getPublic'])->name('communities.getPublic');
    Route::get('channels/{channel}', [ChannelController::class, 'show'])->name('channels.show')->where('channel', '[0-9]+');

    Route::post('invitations', [InvitationController::class, 'store'])->name('invitations.store');

    Route::post('channels', [ChannelController::class, 'store'])->name('channels.store');

    Route::post('posts', [PostController::class, 'store'])->name('posts.store');
    Route::put('posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');

    Route::post('postreply', [PostReplyController::class, 'store'])->name('postreply.store');
    Route::post('postreaction', [PostReactionController::class, 'store'])->name('postreaction.store');
    Route::post('postreaction/toggle', [PostReactionController::class, 'toggle'])->name('postreaction.toggle');

    Route::get('chats', [ChatController::class, 'index']);
    Route::post('chats', [ChatController::class, 'store'])->name('chats.store');
    Route::post('chats/files', [ChatController::class, 'store_files'])->name('chats.store_files');
    Route::patch('chats', [ChatController::class, 'read'])->name('chats.read');
    Route::delete('chats/{chat}', [ChatController::class, 'destroy'])->name('chats.destroy');

    Route::get('users', [UserController::class, 'index']);

    Route::get('events', [CalendarEventController::class, 'index']);
    Route::post('events', [CalendarEventController::class, 'store'])->name('events.store');
    Route::put('events/{event}', [CalendarEventController::class, 'update'])->name('events.update');
    Route::delete('events/{event}', [CalendarEventController::class, 'destroy'])->name('events.edit');

    Route::get('schannels/{schannel}', [SChannelController::class, 'show'])->name('schannels.show')->where('schannel', '^sc[0-9]+$');
});
