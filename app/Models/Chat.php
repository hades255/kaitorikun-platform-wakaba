<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;
    protected $fillable = ['from', 'to', 'content', 'status', 'reply', 'emoji', 'type', 'deleted', 'other'];

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

    public static function getChatListWithReplies($userId)
    {
        return self::where(function ($query) use ($userId) {
            $query->where('from', $userId)
                ->orWhere('to', $userId);
        })
            ->where('deleted', '!=', $userId)
            ->with('reply')
            // ->orderBy('created_at', 'desc')
            ->get();
    }
}
