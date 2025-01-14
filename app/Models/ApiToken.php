<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApiToken extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'personal_access_tokens';

    protected $fillable = [
        "token",
    ];
}
