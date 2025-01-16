<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'icon', 'requireApproval', 'isPublic', 'user_id'];

    public function posts() {
        return $this->hasMany(Post::class);
    }

    public function users() {
        return $this->belongsToMany(User::class, 'channel_users');
    }

    public function invitations() {
        return $this->hasMany(Invitation::class);
    }
}
