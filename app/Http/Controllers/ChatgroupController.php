<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Models\Chatgroup;
use App\Models\ChatgroupUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ChatgroupController extends Controller
{
    public function store(Request $request)
    {
        try {
            $result = DB::transaction(function () use ($request) {
                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'users.*' => 'required',
                ]);

                $group = new Chatgroup();
                $group->name = $validatedData['name'];
                $group->user_id = Auth::id();
                $group->save();

                $group->users()->attach(Auth::id(), ['status' => 'accepted']);
                foreach ($request->users as $user) {    //  todo    send email to users
                    $token = hash('sha256', $user['email'] . '-' . microtime(true));
                    $group->users()->attach($user['id'], ['status' => 'pending', 'token' => $token]);
                    $data = [
                        'email' => $user['email'],
                        'name' => $user['name'],
                        'token' => $token,
                        'contact' => env('MAIL_FROM_ADDRESS', ''),
                        'social' => '/',
                        'url' => url('/chatgroup/accept-invitation?token=' . $token),
                        'subject' => 'グループチャット招待',
                    ];
                    SendEmailJob::dispatch($data, 'email.groupchat_invitation.blade');
                }

                return $group;
            });

            return response()->json($result, 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Failed to create community', "message" => $th->getMessage()], 500);
        }
    }

    public function view($id)
    {
        $invitation = ChatgroupUser::where("token", $id)->first();

        if (!$invitation) {
            return response()->json(['message' => '招待が見つかりません.'], 404);
        }

        if ($invitation->status === 'accepted') {
            return response()->json(['message' => '招待はすでに承諾されています.'], 400);
        }
        $invitation->status = 'viewed';
        $invitation->save();

        return response()->json(['message' => '招待が正常に表示されました!']);
    }

    public function accept($id)
    {
        $invitation = ChatgroupUser::where("token", $id)->first();

        if (!$invitation) {
            return response()->json(['message' => '招待が見つかりません.'], 404);
        }
        if ($invitation->status === 'accepted') {
            return response()->json(['message' => '招待はすでに承諾されています.'], 400);
        }
        $invitation->status = 'accepted';
        $invitation->save();

        return response()->json(['message' => '招待が正常に承諾されました!']);
    }
}
