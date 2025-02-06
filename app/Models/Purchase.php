<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Purchase extends Model
{
    use HasFactory;
    use SoftDeletes;

    // このモデルで使用するテーブル名
    protected $table = 'purchases';

    protected $fillable = [
        "id",
        "customer_id",
        "payment_officer_id",
        "service_officer_id",
        "purchase_estimate_amount",
        "purchase_amount",
        "signature_img_path",
        "status",
    ];
}
