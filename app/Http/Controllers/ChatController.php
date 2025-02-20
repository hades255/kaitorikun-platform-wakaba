<?php

namespace App\Http\Controllers;

use App\Jobs\NewChatJob;
use App\Jobs\ReactionToChatJob;
use App\Jobs\ReadChatJob;
use App\Models\Chat;
use App\Models\Chatgroup;
use App\Models\ChatReaction;
use App\Models\User;
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
        $chats = Chat::getChatListWithReplies($userId);
        $groupIds = Auth::user()->chatgroups->pluck('id');
        $groupChats = Chat::whereIn('group_id', $groupIds)
            ->with(['reply', 'reactions'])
            ->get();
        return response()->json([
            "chats" => $chats,
            "groupChats" => $groupChats
        ]);
    }

    public function users()
    {
        $communities = Auth::user()->communitiesWithUsers;
        $communityUsers = collect();
        foreach ($communities as $community) {
            $communityUsers = $communityUsers->merge($community->users);
        }
        $chats = Auth::user()->chatgroups;
        $chatGroupUsers = collect();
        foreach ($chats as $chat) {
            $chatGroupUsers = $chatGroupUsers->merge($chat->users);
        }
        $allUsers = $communityUsers->merge($chatGroupUsers)->unique('id')->values();

        $groups = Auth::user()->chatgroupsAccepted;

        $response = [
            'users' => $allUsers->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'type' => 'chat',
                    'users' => [['id' => Auth::id(), 'name' => Auth::user()->name, 'email' => Auth::user()->email], ['id' => $user->id, 'name' => $user->name, 'email' => $user->email]]
                ];
            }),
            'groups' => $groups->map(function ($group) {
                return [
                    'id' => $group->id,
                    'name' => $group->name,
                    'user_id' => $group->user_id,
                    'type' => 'group',
                    'users' => $group->users->map(function ($user) {
                        return ['id' => $user->id, 'name' => $user->name, 'email' => $user->email];
                    })
                ];
            }),
        ];

        return response()->json($response);
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
            'group_id' => 'nullable|integer',
        ]);
        $chat = new Chat();
        $chat->to = $validatedData['to'];
        $chat->content = $validatedData['content'];
        $chat->status = $validatedData['status'];
        $chat->reply = $validatedData['reply'];
        $chat->emoji = $validatedData['emoji'];
        $chat->group_id = $validatedData['group_id'];
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
                "reply" => $item['reply'],
                "group_id" => $item['group_id'],
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
        if ($request->type == "chat")
            DB::table("chats")->where("from", $request->from)->where("to", Auth::id())->where("status", "unread")->update(["status" => "read"]);
        if ($request->type == "group")
            DB::table("chats")->where("group_id", $request->from)->where("status", "unread")->update(["status" => "read"]);
        ReadChatJob::dispatch(["from" => $request->from, "to" => $request->to, "type" => $request->type,]);
        return response()->noContent();
    }

    public function reaction(Request $request)
    {
        $validatedData = $request->validate([
            'reaction' => 'required|string|max:1000',
            'chat_id' => 'required|integer',
        ]);
        $reaction = ChatReaction::where('chat_id', $validatedData['chat_id'])
            ->where('user_id', Auth::id())
            ->first();
        if ($reaction) {
            if ($reaction->reaction == $validatedData['reaction']) {
                if ($reaction->delete()) {
                    ReactionToChatJob::dispatch(["user_id" => Auth::id(), "chat_id" => $reaction->chat_id, "reaction" => ""], ["id" => Auth::id(), "name" => Auth::user()->name]);
                    return response()->json(["user_id" => Auth::id(), "chat_id" => $reaction->chat_id, "reaction" => ""], 200);
                }
            } else {
                $reaction->reaction = $validatedData['reaction'];
                if ($reaction->save()) {
                    ReactionToChatJob::dispatch($reaction, ["id" => Auth::id(), "name" => Auth::user()->name]);
                    return response()->json($reaction, 200);
                }
            }
        } else {
            $reaction = new ChatReaction();
            $reaction->reaction = $validatedData['reaction'];
            $reaction->chat_id = $validatedData['chat_id'];
            $reaction->user_id = Auth::id();
            if ($reaction->save()) {
                ReactionToChatJob::dispatch($reaction, ["id" => Auth::id(), "name" => Auth::user()->name]);
                return response()->json($reaction, 201);
            }
        }
        return response()->json(['message' => 'Reaction not found.'], 404);
    }
}
