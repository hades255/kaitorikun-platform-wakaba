<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'password',
        'token',
        'role',
        'status',
        'updated_at',
        'created_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function onlyEssentialFields()
    {
        return $this->only(['id', 'name', 'email']);
    }

    public function channels()
    {
        return $this->belongsToMany(Channel::class, 'channel_users');
    }

    public function communities()
    {
        return $this->belongsToMany(Community::class, 'community_users');
    }

    public function communitiesWithUsers()
    {
        return $this->belongsToMany(Community::class, 'community_users')->with("users");
    }

    public function schannelUsers()
    {
        return $this->hasMany('App\Models\SchannelUser', 'user_id');
    }

    public function communityUsers()
    {
        return $this->hasMany(CommunityUser::class);
    }

    public function channelUsers()
    {
        return $this->hasMany(ChannelUser::class);
    }

    public function chats()
    {
        return $this->hasMany(Chat::class, 'from')->orWhere('to', $this->id);
    }

    public function chatgroups()
    {
        return $this->belongsToMany(Chatgroup::class, 'chatgroup_users', 'user_id', 'chatgroup_id')->with("users");
    }

    public function chatgroupsAccepted()
    {
        return $this->belongsToMany(Chatgroup::class, 'chatgroup_users', 'user_id', 'chatgroup_id')->where('status', 'accepted')->with("users");
    }

    public function role()
    {
        return $this->belongsTo(UserRole::class, 'role');
    }

    public function getRoleNameAttribute()
    {
        return $this->role->role_name ?? '';
    }
}
