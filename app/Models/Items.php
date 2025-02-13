<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Items extends Model
{
    use HasFactory;
    use SoftDeletes;

    // このモデルで使用するテーブル名
    protected $table = 'items';

    protected $fillable = [
        "id",
        "purchase_id",
        "customer_id",
        "item_id",
        "amount",
        "hearing_value1",
        "hearing_value2",
        "hearing_value3",
        "hearing_value4",
        "request_basis",
        "rate",
        "request_price",
        "highest_check_price",
        "corporations",
        "corporation_check_price",
        "supervisor_instruction_price",
        "purchase_price",
        "leave_deadline_date",
        "images",
        "image_files",
        "agree",
        "result",
    ];
    public function purchase(): BelongsTo
    {
        return $this->belongsTo(Purchase::class);
    }
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
    public function item(): BelongsTo
    {
        return $this->belongsTo(ItemMaster::class);
    }

    public static function getItems($purchaseId)
    {
        $query = self::select([
            'items.*',
            'item_master.category1 as category1',
            'item_master.category2 as category2',
            'item_master.category3 as category3',
            'item_master.category4 as category4',
            'item_master.category5 as category5',
            'item_master.category6 as category6',
            'item_master.name as name',
        ]);
        $query->leftJoin('item_master', function ($join) {
            $join->on('item_master.id', '=', 'items.item_id');
        });
        $query->where('items.purchase_id', $purchaseId);
        return $query->get();
    }

}
