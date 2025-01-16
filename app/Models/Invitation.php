<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;

    protected $fillable = ['channel_id', 'sender_id', 'receiver_id'];

    public function channel() {
        return $this->belongsTo(Channel::class);
    }
}
