<?php

namespace App\Http\Controllers;

use App\Events\NewChannel;
use App\Jobs\NewChannelJob;
use App\Models\Channel;
use App\Models\CommunityUser;
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
            'community_id' => 'required|integer',
        ]);
        $channel = new Channel();
        $channel->name = $validatedData['name'];
        $channel->description = $validatedData['description'];
        $channel->icon = $validatedData['icon'];
        $channel->community_id = $validatedData['community_id'];
        $channel->user_id = Auth::id();
        if ($channel->save()) {
            NewChannelJob::dispatch($channel, Auth::user()->name);
            CommunityUser::firstOrCreate(
                [
                    'community_id' => $validatedData['community_id'],
                    'user_id' => Auth::id(),
                ],
                []
            );
            // $channel->users()->attach(Auth::id());
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
        // $users = $channel->community->users->select('users.id', 'users.name', 'users.email')->get();
        $users = $channel->community->users;
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
}
