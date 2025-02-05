<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category3 extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'categories3';

    protected $fillable = [
        "id",
        "parent_id",
        "name",
    ];
}
