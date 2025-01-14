<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Staff extends Model
{
    use HasFactory;
    use SoftDeletes;

    // このモデルで使用するテーブル名
    protected $table = 'staffs';

    protected $fillable = [
        "id",
        "staff_id",
        "password",
        "system_user_id",
        "shop_id",
        "user_type",
        "name",
        "name_kana",
        "phone_number",
        "birthday",
        "gender",
        "zipcode",
        "address1",
        "address2",
        "address3",
        "identification_id1",
        "identification_type1",
        "identification_path1",
        "identification_id2",
        "identification_type2",
        "identification_path2",
        "history_type",
        "history_path",
        "working_history_type",
        "working_history_path",
        "guarantor_id",
        "contract_type",
        "contract_path",
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function shops(): BelongsTo
    {
        return $this->belongsTo(Shop::class);
    }

    public function guarantors(): BelongsTo
    {
        return $this->belongsTo(Guarantor::class);
    }
}
