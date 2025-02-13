<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FlagMaster extends Model
{
    use HasFactory;
    use SoftDeletes;

    // このモデルで使用するテーブル名
    protected $table = 'flag_master';

    protected $fillable = [
        "id",
        "name",
    ];
}
