<?php

namespace App\Http\Controllers;

use App\Events\ReplyToPost;
use App\Jobs\ReplyToPostJob;
use App\Models\PostReply;
use App\Models\SchannelUser;
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
        $request->merge([
            'schannel' => $request->input('schannel', ''),
        ]);
        $validatedData = $request->validate([
            'reply' => 'required|string|max:1000',
            'post_id' => 'required|integer',
            'schannel' => 'nullable|string|max:255',
        ]);
        $reply = new PostReply();
        $reply->reply = $validatedData['reply'];
        $reply->post_id = $validatedData['post_id'];
        $reply->user_id = Auth::id();
        if ($reply->save()) {
            ReplyToPostJob::dispatch($reply, Auth::user()->name, $validatedData['schannel']);
            if ($validatedData['schannel']) {
                SchannelUser::firstOrCreate(
                    [
                        'schannel_id' => $validatedData['schannel'],
                        'user_id' => Auth::id(),
                    ],
                    []
                );
            }
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
