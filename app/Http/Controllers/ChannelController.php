<?php

namespace App\Http\Controllers;

use App\Events\NewChannel;
use App\Jobs\NewChannelJob;
use App\Models\Channel;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChannelController extends Controller
{
    // List all channels 
    public function index()
    {
        $channel = Channel::all();
        return response()->json($channel);
    }

    // Store a new channel 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'icon' => 'nullable|string|max:255',
            'requireApproval' => 'required|boolean',
            'isPublic' => 'required|boolean',
        ]);
        $channel = new Channel();
        $channel->name = $validatedData['name'];
        $channel->description = $validatedData['description'];
        $channel->icon = $validatedData['icon'];
        $channel->requireApproval = $validatedData['requireApproval'];
        $channel->isPublic = $validatedData['isPublic'];
        $channel->user_id = Auth::id();
        if ($channel->save()) {
            if ($channel->isPublic) {   //  broadcase public channel
                NewChannelJob::dispatch($channel);
            }
            $channel->users()->attach(Auth::id());
            return response()->json(["channel" => $channel, "user" => Auth::user()], 201);
        }
        return response()->json(['error' => 'Failed to create channel'], 500);
    }

    // Show a specific channel 
    public function show(Channel $channel, Request $request)
    {
        $limit = $request->input('limit', 10);
        $offset = $request->input('offset', 0);
        $sortBy = $request->input('sort_by', 'created_at');
        $sortOrder = $request->input('sort_order', 'desc');
        $posts = $channel->limitedPosts($limit, $offset, $sortBy, $sortOrder);
        $users = $channel->users()->select('users.id', 'users.name', 'users.email')->get();
        // return response()->json(["chennel" => $channel, "posts" => $posts, "users" => $users]);
        return response()->json(["posts" => $posts, "users" => $users]);
    }

    // Update a specific channel 
    public function update(Request $request, Channel $channel)
    {
        // Validate and update the channel 
        // ...
    }

    // Delete a specific channel 
    public function destroy(Channel $channel)
    {
        // Delete the channel 
        // ...
    }

    //   get public channels
    public function getPublic()
    {
        $channels = Channel::where("isPublic", true)->get();
        return response()->json([
            'channels' => $channels
        ]);
    }

    //  get channels I created
    public function getMine()
    {
        $userId = Auth::id();
        $createdChannels = Channel::getMyChannels($userId);
        return response()->json([
            'channels' => $createdChannels
        ]);
    }

    //  get channels I take part in
    public function getWorking()
    {
        $userId = Auth::id();
        $joinedChannels = Channel::getChannelsForUser($userId);
        return response()->json([
            'channels' => $joinedChannels
        ]);
    }

    public function sendInvitation(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|max:255',
            'channel_id' => 'required|integer',
        ]);
        $userId = Auth::id();
        $email = $validatedData["email"];
        $receiver = User::where("email", $email)->first();
        if ($receiver) {
            $token = hash("sha256", $email);
            $invitation = new Invitation();
            $invitation->sender_id = $userId;
            $invitation->channel_id = $validatedData["channel_id"];
            $invitation->receiver_id = $receiver->id;
            $invitation->token = $token;
            if ($invitation->save()) {
                //  todo    send mail to the receiver
                return response()->json($invitation, 201);
            }
            return response()->json(['error' => 'Failed to send invitation'], 500);
        }
        return response()->json(['error' => 'user not found'], 404);
    }
}
