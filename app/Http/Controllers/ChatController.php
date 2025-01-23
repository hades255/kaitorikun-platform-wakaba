<?php

namespace App\Http\Controllers;

use App\Jobs\NewChatJob;
use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = Auth::id();
        $chats = Chat::where(function ($query) use ($userId) {
            $query->where('from', $userId)
                ->orWhere('to', $userId);
        })
            ->where('deleted', '!=', $userId)
            ->with(['fromUser', 'toUser'])
            ->get();
        return response()->json($chats);
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
            'to' => 'required|integer',
            'content' => 'required|string|max:1000',
            'status' => 'nullable|string|in:read,unread',
            'reply' => 'nullable|integer',
            'emoji' => 'nullable|string',
        ]);
        $chat = new Chat();
        $chat->to = $validatedData['to'];
        $chat->content = $validatedData['content'];
        $chat->status = $validatedData['status'];
        $chat->reply = $validatedData['reply'];
        $chat->emoji = $validatedData['emoji'];
        $chat->type = 'txt';
        $chat->from = Auth::id();
        if ($chat->save()) {
            NewChatJob::dispatch($chat, Auth::user()->name);
            return response()->json(["chat" => $chat], 201);
        }
        return response()->json(['error' => 'Failed to create chat'], 500);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store_files(Request $request)
    {
        $items = $request->input('chats');
        $createdChats = [];
        foreach ($items as $item) {
            $chat = Chat::create([
                "to" => $item['to'],
                "content" => $item['content'],
                "type" => $item['type'],
                "other" => json_encode($item['other']),
                "from" =>  Auth::id(),
            ]);
            $createdChats[] = $chat;
            NewChatJob::dispatch($chat, Auth::user()->name);
        }
        return response()->json(["chats" => $createdChats], 201);
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
    public function destroy(Chat $chat)
    {
        if ($chat->deleted == 0) {
            $chat->deleted = Auth::id();
            $chat->save();
        } else {
            $chat->delete();
        }
        return response()->noContent();
    }

    public function read(Request $request)
    {
        DB::table("chats")->where("from", $request->userId)->where("to", Auth::id())->where("status", "unread")->update(["status" => "read"]);
        return response()->noContent();
    }
}
