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
        "purchase_date",
        "payment_date",
        "wholesale_date",
        "gold_seeds",
        "g_face_value",
        "sales_forecast",
        "sales_price",
        "postage",
        "profit_forecast",
        "profit_price",
        "wholesale_destination",
        "tentative_appraisal_date",
        "tentative_appraisal_price",
        "actual_appraisal_date",
        "actual_appraisal_price",
        "note1",
        "note2",
        "leave_deadline_date",
        "agree",
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

    public static function getItemsList($validatedData)
    {
        $query = self::select([
            'items.*',
            'purchases.purchase_date',
            'categories1.name as category1',
            'categories2.name as category2',
            'categories3.name as category3',
            'categories4.name as category4',
            'categories5.name as category5',
            'categories6.name as category6',
            'item_master.name as item_name',
            'customers.name',
            'customers.name_kana',
            'customers.phone_number1',
            'customers.phone_number2',
            'customers.type',
            'prefectures.name as address1',
            'cities.name as address2',
            'customers.address3',
            'shops.name as shop_name',
            'users.name as officer_name',
        ]);
        $query->leftJoin('item_master', function ($join) {
            $join->on('item_master.id', '=', 'items.item_id');
        });
        $query->join('customers', function ($join) use ($validatedData) {
            $join->on('customers.id', '=', 'items.customer_id');
            if (isset($validatedData["shop_id"])) {
                $join->where('customers.shop_id', $validatedData["shop_id"]);
            }
        });
        $query->leftJoin('shops', function ($join) {
            $join->on('shops.id', '=', 'customers.shop_id');
        });
        $query->leftJoin('purchases', function ($join) {
            $join->on('purchases.id', '=', 'items.purchase_id');
        });
        $query->leftJoin('users', function ($join) {
            $join->on('users.id', '=', 'purchases.payment_officer_id');
        });
        $query->leftJoin('prefectures', function ($join) {
            $join->on('prefectures.id', '=', 'customers.address1');
        });
        $query->leftJoin('cities', function ($join) {
            $join->on('cities.id', '=', 'customers.address2');
        });
        $query->leftJoin('categories1', function ($join) {
            $join->on('categories1.id', '=', 'item_master.category1');
        });
        $query->leftJoin('categories2', function ($join) {
            $join->on('categories2.id', '=', 'item_master.category2');
        });
        $query->leftJoin('categories3', function ($join) {
            $join->on('categories3.id', '=', 'item_master.category3');
        });
        $query->leftJoin('categories4', function ($join) {
            $join->on('categories4.id', '=', 'item_master.category4');
        });
        $query->leftJoin('categories5', function ($join) {
            $join->on('categories5.id', '=', 'item_master.category5');
        });
        $query->leftJoin('categories6', function ($join) {
            $join->on('categories6.id', '=', 'item_master.category6');
        });
        return $query->get();
    }
}
