<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'subject', 'content', 'notifyEmail', 'channel_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }

    public function reactions()
    {
        return $this->hasMany(PostReaction::class);
    }

    public function replies()
    {
        return $this->hasMany(PostReply::class);
    }
}
