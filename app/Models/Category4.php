<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category4 extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'categories4';

    protected $fillable = [
        "id",
        "parent_id",
        "name",
        "child_id",
    ];
}
