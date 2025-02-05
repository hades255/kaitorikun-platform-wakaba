<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category6 extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'categories6';

    protected $fillable = [
        "id",
        "parent_id",
        "name",
    ];
}
