<?php

namespace App\Http\Controllers;

use App\Events\NewPost;
use App\Jobs\DeletePostJob;
use App\Jobs\EditPostJob;
use App\Jobs\NewPostJob;
use App\Models\ChannelUser;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
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
            'channel_id' => $request->input('channel_id', 0),
        ]);
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'content' => 'required|string|max:1000',
            'channel_id' => 'required|integer',
            'community_id' => 'required|integer',
            'notifyEmail' => 'required|boolean',
            'attachment' => 'nullable|string|max:1000',
        ]);
        $post = new Post();
        $post->title = $validatedData['title'];
        $post->subject = $validatedData['subject'];
        $post->content = $validatedData['content'];
        $post->notifyEmail = $validatedData['notifyEmail'];
        $post->channel_id = $validatedData['channel_id'];
        $post->community_id = $validatedData['community_id'];
        $post->attachment = $validatedData['attachment'];
        $post->user_id = Auth::id();
        if ($post->save()) {
            NewPostJob::dispatch($post, Auth::user()->name);
            return response()->json($post, 201);
        }
        return response()->json(['error' => 'Failed to create post'], 500);
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
    public function update(Request $request, Post $post)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'content' => 'required|string|max:1000',
            'notifyEmail' => 'required|boolean',
            'attachment' => 'nullable|string|max:1000',
        ]);
        $post->title = $validatedData['title'];
        $post->subject = $validatedData['subject'];
        $post->content = $validatedData['content'];
        $post->notifyEmail = $validatedData['notifyEmail'];
        $post->attachment = $validatedData['attachment'];
        if ($post->save()) {
            EditPostJob::dispatch($post, Auth::user()->name);
            return response()->json($post);
        }
        return response()->json(['error' => 'Failed to create post'], 500);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->reactions()->delete();
        $post->replies()->delete();
        DeletePostJob::dispatch(["id" => $post->id, "user_id" => $post->user_id, "community_id" => $post->community_id], Auth::user()->name);
        $post->delete();
        return response()->noContent();
    }
}
