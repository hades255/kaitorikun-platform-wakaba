<?php

use App\Http\Controllers\AuthController;
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
Route::get('/datas', [StaffController::class, 'initDatas']);

Route::post('/staff/register', [StaffController::class, 'createOrUpdate']);
Route::post('/staff/info', [StaffController::class, 'index']);
Route::post('/staff/exit', [StaffController::class, 'destroy']);
Route::get('/test-file', function () {
    $filePath = storage_path('app/public/uploads/6bxVWpU8EBUUc4vgb6UywhTQE9BSCne9aCmv0ojx.png');
    
    if (!file_exists($filePath)) {
        return 'File does not exist.';
    }
    return response()->file($filePath);
});