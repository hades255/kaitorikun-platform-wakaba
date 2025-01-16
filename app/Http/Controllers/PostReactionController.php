<?php

namespace App\Http\Controllers;

use App\Models\PostReaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostReactionController extends Controller
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
            'reaction' => 'required|string|max:1000',
            'post_id' => 'required|integer',
            'channel_id' => 'required|integer',
        ]);
        $reaction = new PostReaction();
        $reaction->reaction = $validatedData['reaction'];
        $reaction->post_id = $validatedData['post_id'];
        $reaction->channel_id = $validatedData['channel_id'];
        $reaction->user_id = Auth::id();
        if ($reaction->save()) {
            //  todo    push notification
            return response()->json($reaction, 201);
        }
        return response()->json(['error' => 'Failed to create reaction'], 500);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function toggle(Request $request)
    {
        $validatedData = $request->validate([
            'reaction' => 'required|string|max:1000',
            'post_id' => 'required|integer',
            'channel_id' => 'required|integer',
        ]);
        $reaction = PostReaction::where('reaction', $validatedData['reaction'])->where('post_id', $validatedData['post_id'])->where('channel_id', $validatedData['channel_id'])->where('user_id', Auth::id())->first();
        if ($reaction) {
            $reaction->delete();
            return response()->json($reaction, 201);
        }
        return response()->json(['message' => 'Reaction not found.'], 404);
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
}
