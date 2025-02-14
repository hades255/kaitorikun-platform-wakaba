<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'icon', 'requireApproval', 'isPublic', 'user_id', 'community_id'];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function limitedPosts($limit = 10, $offset = 0, $sortBy = 'created_at', $sortOrder = 'desc')
    {
        return $this->posts()
            ->orderBy($sortBy, $sortOrder)
            ->skip($offset)
            ->take($limit)
            ->with(['reactions', 'replies'])
            ->get();
    }

    public function limitedPostsWithUsers($limit = 10, $offset = 0, $sortBy = 'created_at', $sortOrder = 'desc')
    {
        return $this->posts()
            ->orderBy($sortBy, $sortOrder)
            ->skip($offset)
            ->take($limit)
            ->with([
                'user',
                'reactions.user',
                'replies.user'
            ])
            ->get();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function community()
    {
        return $this->belongsTo(Community::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'channel_users');
    }

    public static function getMyChannels($userId)
    {
        return self::where('user_id', $userId)->get();
    }

    public static function getChannelsForUser($userId)
    {
        return self::whereHas('users', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })->get();
    }

    public function channelUsers()
    {
        return $this->hasMany(ChannelUser::class);
    }
}
