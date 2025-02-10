<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Models\CommunityUser;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'users.*' => 'required',
            'community_id' => 'required|integer',
        ]);
        $userId = Auth::id();
        $users = $validatedData["users"];

        return response()->json($users);
        $email = $validatedData["email"];
        $receiver = User::where("email", $email)->first();
        if ($receiver) {
            $token = hash("sha256", $email . "-" . microtime(true));
            $invitation = new Invitation();
            $invitation->sender_id = $userId;
            $invitation->community_id = $validatedData["community_id"];
            $invitation->receiver_id = $receiver->id;
            $invitation->token = $token;
            if ($invitation->save()) {
                $data = array(
                    'email' => $email,
                    'name' => $receiver->name,
                    'token' => $token,
                    'contact' => env('MAIL_FROM_ADDRESS', ''),
                    'social' => '/',
                    'url' => url('/accept-invitation?token=' . $token),
                    'subject' => 'コミュニティに参加しましょう'
                );
                SendEmailJob::dispatch($data, "email.community_invitation");
                return response()->json($invitation, 201);
            }
            return response()->json(['error' => 'Failed to send invitation'], 500);
        }
        return response()->json(['error' => 'user not found'], 404);
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
        $old = CommunityUser::where("community_id", $invitation->community_id)->where("user_id", $invitation->receiver_id)->first();
        if ($old) {
            return response()->json(['message' => '招待はすでに承諾されています.'], 400);
        }
        $newCom = new CommunityUser();
        $newCom->community_id = $invitation->community_id;
        $newCom->user_id = $invitation->receiver_id;
        $newCom->save();
        $invitation->status = 'accepted';
        $invitation->save();

        return response()->json(['message' => '招待が正常に承諾されました!']);
    }

    public function search_users(Request $request)
    {
        $search = $request->search;
        $community_id = $request->community_id;
        $users = User::where(function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        })
            ->whereDoesntHave('communityUsers', function ($query) use ($community_id) {
                $query->where('community_id', $community_id);
            })
            ->select('id', 'name', 'email')
            ->get();
        return response()->json($users);
    }
}
