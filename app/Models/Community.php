<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Community extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'icon', 'requireApproval', 'isPublic', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function communityUsers()
    {
        return $this->hasMany(CommunityUser::class);
    }

    public function channels()
    {
        return $this->hasMany(Channel::class);
    }

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }

    public static function getMyCommunities($userId)
    {
        return self::where('user_id', $userId)->with(['channels'])->orderBy('updated_at', 'desc')->get();
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'community_users');
    }

    public function channelsWithUsers($userId)
    {
        return $this->hasMany(Channel::class)->whereHas('users', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        });
    }

    public static function getCommunitiesForUser($userId)
    {
        return self::whereHas('users', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })->with(['channels'])->orderBy('updated_at', 'desc')->get();
    }

    // public static function getCommunitiesForUser($userId)
    // {
    //     return self::whereHas('channels.users', function ($query) use ($userId) {
    //         $query->where('user_id', $userId);
    //     })->with(['channels' => function ($query) use ($userId) {
    //         $query->whereHas('users', function ($userQuery) use ($userId) {
    //             $userQuery->where('user_id', $userId);
    //         });
    //     }])->orderBy('updated_at', 'desc')->get();
    // }
}
