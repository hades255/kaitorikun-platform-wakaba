<?php

namespace App\Http\Controllers;

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
                    'icon' => 'nullable|string|max:255',
                    'requireApproval' => 'required|boolean',
                    'isPublic' => 'required|boolean',
                ]);

                $community = new Community();
                $community->name = $validatedData['name'];
                $community->description = $validatedData['description'] ?? null;
                $community->icon = $validatedData['icon'] ?? null;
                $community->requireApproval = $validatedData['requireApproval'];
                $community->isPublic = $validatedData['isPublic'];
                $community->user_id = Auth::id();
                $community->save();

                if ($community->isPublic) { //  todo    broadcast
                    // NewChannelJob::dispatch($community, Auth::user()->name);
                }

                $channel = new Channel();
                $channel->name = "全般";
                $channel->description = 'コミュニティのデフォルト チャンネル';
                $channel->user_id = Auth::id();
                $channel->save();

                $community->users()->attach(Auth::id());

                return $community;
            });

            return response()->json(["community" => $result, "user" => Auth::user()], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Failed to create community', "message" => $th->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
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

    //   get public communities
    public function getPublic()
    {
        $communities = Community::where("isPublic", true)->with(['channels'])->get();
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
