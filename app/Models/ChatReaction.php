<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatReaction extends Model
{

    protected $fillable = ['chat_id', 'reaction', 'user_id'];

    public function chat()
    {
        return $this->belongsTo(Chat::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
