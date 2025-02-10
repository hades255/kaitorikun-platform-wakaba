<?php

namespace App\Http\Controllers;

use App\Events\NewChannel;
use App\Jobs\NewChannelJob;
use App\Jobs\RemoveChannelJob;
use App\Models\Channel;
use App\Models\CommunityUser;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChannelController extends Controller
{
    public function index()
    {
        $channel = Channel::all();
        return response()->json($channel);
    }

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
        $channel->type = 1;
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

            return response()->json(["channel" => $channel, "user" => Auth::user()], 201);
        }
        return response()->json(['error' => 'Failed to create channel'], 500);
    }

    public function show(Channel $channel, Request $request)
    {
        $limit = $request->input('limit', 10);
        $offset = $request->input('offset', 0);
        $sortBy = $request->input('sort_by', 'created_at');
        $sortOrder = $request->input('sort_order', 'desc');
        $posts = $channel->limitedPosts($limit, $offset, $sortBy, $sortOrder);

        $users = $channel->community->users;

        return response()->json(["posts" => $posts, "users" => $users, "channel" => $channel, "community" => $channel->community]);
    }

    public function update(Request $request, Channel $channel)
    {
        //
    }

    public function destroy(Channel $channel)
    {
        if ($channel->user_id == Auth::id()) {
            try {
                $data = ["name" => $channel->name, "id" => $channel->id, "user_id" => $channel->user_id, "community_id" => $channel->community_id];
                // $channel->posts()->reactions()->delete();
                // $channel->posts()->replies()->delete();
                $channel->posts()->delete();
                if ($channel->delete()) {
                    RemoveChannelJob::dispatch($data, Auth::user()->name);
                    return response()->json($data);
                }
            } catch (\Throwable $th) {
                return response()->json(['error' => 'Failed to remove channel', "message" => $th->getMessage()], 500);
            }
        } else {
            return response()->json(['error' => 'Failed to remove channel', "message" => "Unauthorized user"], 401);
        }
    }
}
