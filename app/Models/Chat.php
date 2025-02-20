<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;
    protected $fillable = ['from', 'to', 'content', 'status', 'reply', 'emoji', 'type', 'deleted', 'other', 'group_id'];

    public function fromUser()
    {
        return $this->belongsTo(User::class, 'from');
    }

    public function toUser()
    {
        return $this->belongsTo(User::class, 'to');
    }

    public function reply()
    {
        return $this->belongsTo(Chat::class, 'reply');
    }

    // Define a self-referencing relationship for the original chat
    public function replies()
    {
        return $this->hasMany(Chat::class, 'reply');
    }

    public function reactions()
    {
        return $this->hasMany(ChatReaction::class);
    }

    public static function getChatListWithReplies($userId)
    {
        return self::where(function ($query) use ($userId) {
            $query->where('from', $userId)
                ->orWhere('to', $userId);
        })
            ->where('deleted', '!=', $userId)
            ->whereNull('group_id')
            ->with(['reply', 'reactions'])
            // ->orderBy('created_at', 'desc')
            ->get();
    }

    public static function getChatListWithRepliesInGroups($userId)
    {
        $groupIds = self::whereNotNull('group_id')
            ->select('group_id')
            ->distinct()
            ->pluck('group_id');
    }

    public function group()
    {
        return $this->belongsTo(Chatgroup::class, 'group_id');
    }
}
