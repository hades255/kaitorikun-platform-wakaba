<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category1 extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'categories1';

    protected $fillable = [
        "id",
        "name",
    ];
}
