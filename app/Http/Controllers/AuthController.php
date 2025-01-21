<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->get('email'))->first();
        if ($user) {
            if ($user->role == 1) {
                if (password_verify($request->get('password'), $user->password)) {
                    $token = $user->createToken('auth_token')->plainTextToken;
                    $response = array(
                        "id" => $user->id,
                        "email" =>  $user->email,
                        "name" =>  $user->name,
                        "role" =>  $user->role,
                        "access_token" => $token
                    );
                    return response()
                        ->json(['status' => 200, 'message' => 'Hi ' . $user->email . ', welcome to home', 'result' => $response], 200);
                } else {
                    return response()->json(['message' => 'ログイン情報が正しくありませんでした。', 'result' => []], 400);
                }
            } else {
                if (Crypt::decrypt($user->password) == $request->get('password')) {
                    $token = $user->createToken('auth_token')->plainTextToken;
                    $response = array(
                        "id" => $user->id,
                        "email" =>  $user->email,
                        "name" =>  $user->name,
                        "role" =>  $user->role,
                        "access_token" => $token
                    );
                    return response()
                        ->json(['status' => 200, 'message' => 'Hi ' . $user->email . ', welcome to home', 'result' => $response], 200);
                } else {
                    return response()->json(['message' => 'ログイン情報が正しくありませんでした。', 'result' => []], 400);
                }
            }
        } else {
            return response()->json(['message' => 'ログイン情報が正しくありませんでした。', 'result' => []], 400);
        }
    }

    public function sendForgotPasswordEmail(Request $request)
    {
        $email = $request->get('email');
        // Generate the token
        $token = bcrypt(Str::random(60));
        $user = User::where('email', $email)->first(); // パスワードリセットをリクエストしたユーザー
        $resetUrl = url('/reset-password?token=' . $token);
        $expirationTime = 60; // 分単位で有効時間を指定

        try {
            $data = array(
                'email' => $user->email,
                'name' => $user->name,
                'reset_url' => $resetUrl,
                'expiration_time' => $expirationTime
              );
              Mail::send('email.change_password', compact('data'), function ($message) use ($data) {
                $message->to($data['email'])->subject('パスワードを忘れていますか？');
            });
    
            // Store the token in the database
            DB::table('forgot_passwords')->updateOrInsert(
                ['email' => $email], // Match on email
                [
                    'email' => $email,
                    'token' => $token, // Hash the token before storing
                    'created_at' => Carbon::now()
                ]
            );
        } catch (\Throwable $error) {
            return response()->json(['message' => $error->getMessage()], 400);
        }
        return response()->json(['message' => 'Sent mail'], 200);
    }

    public function resetPassword(Request $request) {
        $token = $request->get('token');
        $newPassword = $request->get('password');

        $userData = DB::table('forgot_passwords')->where('token', $token)->first();
        if (!isset($userData)) {
            return response()->json(['message' => ''], 400);
        }
        $sentTime = Carbon::parse($userData->created_at);
        $diff = $sentTime->diffInMinutes(Carbon::now());
        // if ($diff > 60) {
        //     return response()->json(['message' => ''], 400);
        // }
        $user = User::where('email', $userData->email)->first();
        if (isset($user)) {
            if ($user->role == 1) {
                $user->password = bcrypt($newPassword);
            } else {
                $user->password = Crypt::encrypt($newPassword);
            }
            $user->save();
        } else {
            return response()->json(['message' => ''], 400);
        }
        return response()->json(['message' => ''], 200);
    }
}
