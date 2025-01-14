<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    // このモデルで使用するテーブル名
    protected $table = 'cities';

    protected $fillable = [
        "prefecture_id",
        "name",
        "zipcode",
    ];
}
