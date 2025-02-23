<?php

namespace App\Http\Controllers;

use App\Events\NewChannel;
use App\Jobs\NewChannelJob;
use App\Jobs\RemoveChannelJob;
use App\Models\Channel;
use App\Models\ChannelUser;
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
            'type' => 'required|boolean',
        ]);
        $channel = new Channel();
        $channel->name = $validatedData['name'];
        $channel->description = $validatedData['description'];
        $channel->icon = $validatedData['icon'];
        $channel->community_id = $validatedData['community_id'];
        $channel->type = $validatedData['type'];
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

        return response()->json(["posts" => $posts, "channel" => $channel,]);
    }

    public function update(Request $request, Channel $channel)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);
        $channel->name = $validatedData['name'];
        $channel->description = $validatedData['description'];
        if ($channel->save()) {
            // NewChannelJob::dispatch($channel, Auth::user()->name);
            return response()->json($channel);
        }
        return response()->json(['error' => 'Failed to update channel'], 500);
    }

    public function destroy(Channel $channel)
    {
        if ($channel->user_id == Auth::id()) {
            try {
                $data = ["name" => $channel->name, "id" => $channel->id, "user_id" => $channel->user_id, "community_id" => $channel->community_id];
                // $channel->posts()->reactions()->delete();
                // $channel->posts()->replies()->delete();
                if ($channel->delete()) {
                    RemoveChannelJob::dispatch($data, Auth::user()->name);
                    // $channel->channelUsers()->delete();
                    $channel->posts()->delete();
                    return response()->json($data);
                }
            } catch (\Throwable $th) {
                return response()->json(['error' => 'Failed to remove channel', "message" => $th->getMessage()], 500);
            }
        } else {
            return response()->json(['error' => 'Failed to remove channel', "message" => "Unauthorized user"], 401);
        }
    }

    public function all_schannels()
    {
        $channels = Channel::where("community_id", 0)->get();
        return response()->json($channels);
    }

    public function show_schannel(Request $request, Channel $channel)
    {
        $validatedData = $request->validate([
            'limit' => 'integer|min:1|max:100',
            'offset' => 'integer|min:0',
            'sort_by' => 'string|in:created_at,updated_at,title',
            'sort_order' => 'string|in:asc,desc',
        ]);

        $channel->load('user');
        if ($channel->user) {
            $channel->user = collect($channel->user->only(['id', 'name']));
        }
        $limit = $validatedData['limit'] ?? 10;
        $offset = $validatedData['offset'] ?? 0;
        $sortBy = $validatedData['sort_by'] ?? 'created_at';
        $sortOrder = $validatedData['sort_order'] ?? 'desc';
        $posts = $channel->posts()
            ->orderBy($sortBy, $sortOrder)
            ->skip($offset)
            ->take($limit)
            ->with(['user', 'reactions.user', 'replies.user'])
            ->get();
        $hidden_fields = [
            'email',
            'active',
            'last_login',
            'password',
            'remember_token',
            'token',
            'role',
            'status',
            'updated_at',
            'created_at',
            'email_verified_at',
            'deleted_at'
        ];
        $posts->each(function ($post) use ($hidden_fields) {
            $post->user->makeHidden($hidden_fields);
            $post->reactions->each(function ($reaction) use ($hidden_fields) {
                $reaction->user->makeHidden($hidden_fields);
            });
            $post->replies->each(function ($reply) use ($hidden_fields) {
                $reply->user->makeHidden($hidden_fields);
            });
        });
        $uniqueUsers = collect([$channel->user, Auth::user()]);
        foreach ($posts as $post) {
            $uniqueUsers->push($post->user);
            $uniqueUsers = $uniqueUsers->merge($post->reactions->pluck('user'));
            $uniqueUsers = $uniqueUsers->merge($post->replies->pluck('user'));
        }
        $users = $uniqueUsers->unique('id')->values();
        return response()->json([
            'posts' => $posts,
            'users' => $users,
            'channel' => $channel,
        ]);
    }
}
