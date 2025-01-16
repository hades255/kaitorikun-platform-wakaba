<?php

namespace App\Http\Controllers;

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
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'content' => 'nullable|string|max:1000',
            'channel_id' => 'required|integer',
            'notifyEmail' => 'required|boolean',
        ]);
        $post = new Post();
        $post->title = $validatedData['title'];
        $post->subject = $validatedData['subject'];
        $post->content = $validatedData['content'];
        $post->notifyEmail = $validatedData['notifyEmail'];
        $post->channel_id = $validatedData['channel_id'];
        $post->user_id = Auth::id();
        if ($post->save()) {
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
    public function destroy(string $id)
    {
        //
    }
}
