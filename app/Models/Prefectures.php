<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Prefectures extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'prefectures';

    protected $fillable = [
        "name",
    ];
}
