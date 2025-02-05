<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class SChannelController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $schannel)
    {
        $posts = Post::where("community_id", 0)->where("schannel", $schannel)
            ->orderBy("created_at", "desc")
            ->skip(0)
            ->take(10)
            ->with(['reactions', 'replies'])
            ->get();
        $users = User::whereHas('schannelUsers', function ($query) use ($schannel) {
            $query->where('schannel_id', $schannel);
        })->get();

        return response()->json(["posts" => $posts, "users" => $users]);
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
}
