<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatgroupUser extends Model
{
    protected $fillable = ['chatgroup_id', 'user_id', 'status', 'token'];
}
