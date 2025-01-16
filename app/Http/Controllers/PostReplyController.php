<?php

namespace App\Http\Controllers;

use App\Models\PostReply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostReplyController extends Controller
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
            'reply' => 'required|string|max:1000',
            'post_id' => 'required|integer',
            'channel_id' => 'required|integer',
        ]);
        $reply = new PostReply();
        $reply->reply = $validatedData['reply'];
        $reply->post_id = $validatedData['post_id'];
        $reply->channel_id = $validatedData['channel_id'];
        $reply->user_id = Auth::id();
        if ($reply->save()) {
            //  todo    push notification
            return response()->json($reply, 201);
        }
        return response()->json(['error' => 'Failed to create reply'], 500);
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
