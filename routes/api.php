<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalendarEventController;
use App\Http\Controllers\CustomerManage\CustomerController;
use App\Http\Controllers\CustomerManage\PurchaseController;
use App\Http\Controllers\StaffManage\StaffController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatgroupController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\CustomerManage\ItemsController;
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
Route::post('/purchase/index', [PurchaseController::class, 'index']);
Route::post('/purchase/list', [PurchaseController::class, 'search']);
Route::post('/purchase/contract', [PurchaseController::class, 'contract']);

Route::post('/purchase/search/items', [ItemsController::class, 'search']);
Route::post('/purchase/item/init-register', [ItemsController::class, 'initRegister']);
Route::post('/items/list', [ItemsController::class, 'itemsList']);

Route::post('/invitations/{id}/view', [InvitationController::class, 'view'])->name('invitations.view');
Route::post('/invitations/{id}/accept', [InvitationController::class, 'accept'])->name('invitations.accept');

Route::post('chatgroups/invitations/{id}/view', [ChatgroupController::class, 'view'])->name('chatgroups.invitations.view');
Route::post('chatgroups/invitations/{id}/accept', [ChatgroupController::class, 'accept'])->name('chatgroups.invitations.accept');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('communities', [CommunityController::class, 'store'])->name('communities.store');
    Route::get('communities/mine', [CommunityController::class, 'getMine'])->name('communities.getMine');
    Route::get('communities/joined', [CommunityController::class, 'getWorking'])->name('communities.getWorking');
    Route::get('communities/public', [CommunityController::class, 'getPublic'])->name('communities.getPublic');
    Route::delete('communities/{community}', [CommunityController::class, 'destroy'])->name('communities.destroy')->where('community', '[0-9]+');

    Route::get('invitations/users/search', [InvitationController::class, 'search_users'])->name('invitations.users.search');
    Route::post('invitations', [InvitationController::class, 'store'])->name('invitations.store');

    Route::post('channels', [ChannelController::class, 'store'])->name('channels.store');
    Route::get('channels/{channel}', [ChannelController::class, 'show'])->name('channels.show')->where('channel', '[0-9]+');
    Route::delete('channels/{channel}', [ChannelController::class, 'destroy'])->name('channels.destroy')->where('channel', '[0-9]+');

    Route::get('schannels', [ChannelController::class, 'all_schannels'])->name('schannels.all');
    Route::get('schannels/{channel}', [ChannelController::class, 'show_schannel'])->name('schannels.show')->where('channel', '[0-9]+');

    Route::post('posts', [PostController::class, 'store'])->name('posts.store');
    Route::put('posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');

    Route::post('postreply', [PostReplyController::class, 'store'])->name('postreply.store');
    Route::post('postreaction', [PostReactionController::class, 'store'])->name('postreaction.store');
    Route::post('postreaction/toggle', [PostReactionController::class, 'toggle'])->name('postreaction.toggle');

    Route::get('chats', [ChatController::class, 'index']);
    Route::get('chats/users', [ChatController::class, 'users'])->name('chats.users');
    Route::post('chats', [ChatController::class, 'store'])->name('chats.store');
    Route::post('chats/files', [ChatController::class, 'store_files'])->name('chats.store_files');
    Route::patch('chats', [ChatController::class, 'read'])->name('chats.read');
    Route::delete('chats/{chat}', [ChatController::class, 'destroy'])->name('chats.destroy');
    Route::post('chatgroups', [ChatgroupController::class, 'store'])->name('chatgroups.store');

    Route::get('users', [UserController::class, 'index']);
    Route::get('users/search', [UserController::class, 'search_users'])->name('users.search');

    Route::get('events', [CalendarEventController::class, 'index']);
    Route::post('events', [CalendarEventController::class, 'store'])->name('events.store');
    Route::put('events/{event}', [CalendarEventController::class, 'update'])->name('events.update');
    Route::delete('events/{event}', [CalendarEventController::class, 'destroy'])->name('events.edit');
});
