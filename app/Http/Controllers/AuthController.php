<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

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
}
