<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityUser extends Model
{
   use HasFactory;

   protected $fillable = ['community_id', 'user_id'];
}
