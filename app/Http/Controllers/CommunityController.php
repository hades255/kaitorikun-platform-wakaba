<?php

namespace App\Http\Controllers;

use App\Jobs\NewCommunityJob;
use App\Jobs\RemoveCommunityJob;
use App\Models\Channel;
use App\Models\Community;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CommunityController extends Controller
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
        try {
            $result = DB::transaction(function () use ($request) {
                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'description' => 'nullable|string|max:1000',
                    'guideline' => 'nullable|string|max:1000',
                    'icon' => 'nullable|string',
                    'requireApproval' => 'required|boolean',
                    'isPublic' => 'required|boolean',
                    'type' => 'required|boolean',
                ]);

                $community = new Community();
                $community->name = $validatedData['name'];
                $community->description = $validatedData['description'] ?? null;
                $community->guideline = $validatedData['guideline'];
                $community->icon = $validatedData['icon'] ?? null;
                $community->requireApproval = $validatedData['requireApproval'];
                $community->isPublic = $validatedData['isPublic'];
                $community->type = $validatedData['type'];
                $community->user_id = Auth::id();
                $community->save();

                $channel = new Channel();
                $channel->name = "全般";
                $channel->description = 'コミュニティのデフォルト チャンネル';
                $channel->user_id = Auth::id();
                $channel->community_id = $community->id;
                $channel->type = 0;
                $channel->save();

                // if ($community->isPublic) {
                //     NewCommunityJob::dispatch($community, $channel, Auth::user()->name);
                // }

                $community->users()->attach(Auth::id());
                $channel->users()->attach(Auth::id());

                return ["community" => $community, "channel" => $channel];
            });

            return response()->json($result, 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Failed to create community', "message" => $th->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Community $community, Request $request)
    {
        // $limit = $request->input('limit', 10);
        // $offset = $request->input('offset', 0);
        // $sortBy = $request->input('sort_by', 'created_at');
        // $sortOrder = $request->input('sort_order', 'desc');
        // $posts = $community->limitedPosts($limit, $offset, $sortBy, $sortOrder);
        // $users = $community->users()->select('users.id', 'users.name', 'users.email')->get();
        // // return response()->json(["chennel" => $channel, "posts" => $posts, "users" => $users]);
        // return response()->json(["posts" => $posts, "users" => $users]);
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
    public function destroy(Community $community)
    {
        if ($community->user_id == Auth::id()) {
            try {
                $data = ["name" => $community->name, "id" => $community->id, "user_id" => $community->user_id];
                $community->communityUsers()->delete();
                $community->channels()->delete();
                $community->invitations()->delete();
                if ($community->delete()) {
                    RemoveCommunityJob::dispatch($data, Auth::user()->name);
                    return response()->json($data);
                }
            } catch (\Throwable $th) {
                return response()->json(['error' => 'Failed to remove community', "message" => $th->getMessage()], 500);
            }
        } else {
            return response()->json(['error' => 'Failed to remove community', "message" => "Unauthorized user"], 401);
        }
    }

    //   get public communities
    public function getPublic()
    {
        $currentUserId = Auth::id();

        $communities = Community::where('isPublic', true)
            ->where('user_id', '!=', $currentUserId)
            ->with(['channels'])
            ->orderBy('updated_at', 'desc')
            ->get();

        // $communities = Community::where("isPublic", true)->with(['channels'])->orderBy('updated_at', 'desc')->get();
        return response()->json([
            'communities' => $communities
        ]);
    }

    //  get communities I created
    public function getMine()
    {
        $userId = Auth::id();
        $createdCommunities = Community::getMyCommunities($userId);
        return response()->json([
            'communities' => $createdCommunities
        ]);
    }

    //  get communities I take part in
    public function getWorking()
    {
        $userId = Auth::id();
        $joinedCommunities = Community::getCommunitiesForUser($userId);
        return response()->json([
            'communities' => $joinedCommunities
        ]);
    }
}
