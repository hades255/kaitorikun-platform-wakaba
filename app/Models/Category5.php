<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category5 extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'categories5';

    protected $fillable = [
        "id",
        "parent_id",
        "name",
        "child_id",
    ];
}
