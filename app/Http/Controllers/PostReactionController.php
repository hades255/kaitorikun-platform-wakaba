<?php

namespace App\Http\Controllers;

use App\Events\AddReactionToPost;
use App\Events\RemoveReactionToPost;
use App\Jobs\AddReactionToPostJob;
use App\Jobs\RemoveReactionToPostJob;
use App\Models\PostReaction;
use App\Models\SchannelUser;
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
        $request->merge([
            'schannel' => $request->input('schannel', ''),
        ]);
        $validatedData = $request->validate([
            'reaction' => 'required|string|max:1000',
            'post_id' => 'required|integer',
            'schannel' => 'nullable|string|max:255',
        ]);
        $reaction = new PostReaction();
        $reaction->reaction = $validatedData['reaction'];
        $reaction->post_id = $validatedData['post_id'];
        $reaction->user_id = Auth::id();
        if ($reaction->save()) {
            AddReactionToPostJob::dispatch($reaction, Auth::user()->name, $validatedData['schannel']);
            if ($validatedData['schannel']) {
                SchannelUser::firstOrCreate(
                    [
                        'schannel_id' => $validatedData['schannel'],
                        'user_id' => Auth::id(),
                    ],
                    []
                );
            }
            return response()->json($reaction, 201);
        }
        return response()->json(['error' => 'Failed to create reaction'], 500);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function toggle(Request $request)
    {
        $request->merge([
            'schannel' => $request->input('schannel', ''),
        ]);
        $validatedData = $request->validate([
            'reaction' => 'required|string|max:1000',
            'post_id' => 'required|integer',
            'schannel' => 'nullable|string|max:255',
        ]);
        $reaction = PostReaction::where('reaction', $validatedData['reaction'])
            ->where('post_id', $validatedData['post_id'])
            ->where('user_id', Auth::id())
            ->first();
        if ($reaction) {
            RemoveReactionToPostJob::dispatch($reaction, Auth::user()->name, $validatedData['schannel']);
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
