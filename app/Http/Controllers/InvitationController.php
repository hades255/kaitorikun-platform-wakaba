<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Models\ChannelUser;
use App\Models\CommunityUser;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class InvitationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'users.*.id' => 'required|integer|exists:users,id',
            'users.*.email' => 'required|email',
            'users.*.name' => 'required|string',
            'community_id' => 'required|integer|exists:communities,id',
            'channel_id' => 'required|integer|exists:channels,id',
        ]);

        $userId = Auth::id();
        $communityId = $validatedData['community_id'];
        $channel_id = $validatedData['channel_id'];
        $users = $validatedData['users'];

        DB::beginTransaction();

        try {
            foreach ($users as $receiver) {
                $token = hash('sha256', $receiver['email'] . '-' . microtime(true));

                // Create invitation
                $invitation = Invitation::create([
                    'sender_id' => $userId,
                    'community_id' => $communityId,
                    'channel_id' => $channel_id,
                    'receiver_id' => $receiver['id'],
                    'token' => $token,
                ]);

                // Prepare email data
                $data = [
                    'email' => $receiver['email'],
                    'name' => $receiver['name'],
                    'token' => $token,
                    'contact' => env('MAIL_FROM_ADDRESS', ''),
                    'social' => '/',
                    'url' => url('/accept-invitation?token=' . $token),
                    'subject' => 'コミュニティに参加しましょう',
                ];

                // Dispatch email job
                SendEmailJob::dispatch($data, 'email.community_invitation');
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to send invitation', 'message' => $e->getMessage()], 500);
        }

        return response()->json(['message' => 'Invitations sent successfully'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function view($id)
    {
        $invitation = Invitation::where("token", $id)->first();

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
        $invitation = Invitation::where("token", $id)->first();

        if (!$invitation) {
            return response()->json(['message' => '招待が見つかりません.'], 404);
        }
        if ($invitation->status === 'accepted') {
            return response()->json(['message' => '招待はすでに承諾されています.'], 400);
        }
        // $old = ChannelUser::where("channel_id", $invitation->channel_id)->where("user_id", $invitation->receiver_id)->first();
        // if ($old) {
        //     return response()->json(['message' => '招待はすでに承諾されています.'], 400);
        // }
        // $newCom = new ChannelUser();
        // $newCom->channel_id = $invitation->channel_id;
        // $newCom->user_id = $invitation->receiver_id;
        // $newCom->save();
        // ChannelUser::firstOrCreate([
        //     "channel_id" => $invitation->channel_id,
        //     "user_id" => $invitation->receiver_id,
        // ], []);
        CommunityUser::firstOrCreate([
            "community_id" => $invitation->community_id,
            "user_id" => $invitation->receiver_id,
        ], []);
        $invitation->status = 'accepted';
        $invitation->save();

        return response()->json(['message' => '招待が正常に承諾されました!']);
    }

    public function search_users(Request $request)
    {
        $search = $request->search;
        $channel_id = $request->channel_id;
        $users = User::where(function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        })
            ->whereDoesntHave('channelUsers', function ($query) use ($channel_id) {
                $query->where('channel_id', $channel_id);
            })
            ->select('id', 'name', 'email')
            ->get();
        return response()->json($users);
    }
}
