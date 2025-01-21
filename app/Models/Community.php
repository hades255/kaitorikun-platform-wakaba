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

    public function users()
    {
        return $this->belongsToMany(User::class, 'community_users');
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

    public static function getCommunitiesForUser($userId)
    {
        return self::whereHas('users', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })->with(['channels'])->orderBy('updated_at', 'desc')->get();
    }
}
