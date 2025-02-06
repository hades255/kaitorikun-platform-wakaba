<?php

namespace App\Http\Controllers;

use App\Events\NewPost;
use App\Jobs\DeletePostJob;
use App\Jobs\NewPostJob;
use App\Models\CommunityUser;
use App\Models\Post;
use App\Models\SchannelUser;
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
            'schannel' => $request->input('schannel', ''),
            'channel_id' => $request->input('channel_id', 0),
        ]);
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'content' => 'required|string|max:1000',
            'channel_id' => 'required|integer',
            'community_id' => 'required|integer',
            'notifyEmail' => 'required|boolean',
            'schannel' => 'nullable|string|max:255',
        ]);
        $post = new Post();
        $post->title = $validatedData['title'];
        $post->subject = $validatedData['subject'];
        $post->content = $validatedData['content'];
        $post->notifyEmail = $validatedData['notifyEmail'];
        $post->channel_id = $validatedData['channel_id'];
        $post->community_id = $validatedData['community_id'];
        if ($validatedData['schannel']) $post->schannel = $validatedData['schannel'];
        $post->user_id = Auth::id();
        if ($post->save()) {
            NewPostJob::dispatch($post, Auth::user()->name, $validatedData['schannel']);
            if ($validatedData['schannel']) {
                SchannelUser::firstOrCreate(
                    [
                        'schannel_id' => $validatedData['schannel'],
                        'user_id' => Auth::id(),
                    ],
                    []
                );
            } else {
                CommunityUser::firstOrCreate(
                    [
                        'community_id' => $validatedData['community_id'],
                        'user_id' => Auth::id(),
                    ],
                    []
                );
            }
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->reactions()->delete();
        $post->replies()->delete();
        DeletePostJob::dispatch(["id" => $post->id, "user_id" => $post->user_id, "community_id" => $post->community_id], Auth::user()->name, $post->schannel);
        $post->delete();
        return response()->noContent();
    }
}
