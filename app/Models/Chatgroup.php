<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chatgroup extends Model
{
    protected $fillable = ['name', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'chatgroup_users', 'chatgroup_id', 'user_id');
    }
    public function chats()
    {
        return $this->hasMany(Chat::class, 'group_id');
    }
}
