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
        "purchase_estimate_price",
        "purchase_price",
        "signature_img_path",
        "document_path",
        "check_plan_date",
        "coupon",
        "purchase_date",
        "status",
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
    public static function getPurchasesByCustomer($customerId)
    {
        $query = self::select([
            'purchases.*',
        ]);
        $query->leftJoin('customers', function ($join) {
            $join->on('customers.id', '=', 'purchases.customer_id');
        });
        $query->where('purchases.customer_id', $customerId);
        $query->where('purchases.status', 3);
        return $query->get();
    }
    public static function getPurchasesBySearch($validatedData)
    {
        $query = self::select([
            'purchases.*',
            'customers.shop_id',
            'customers.name',
            'customers.name_kana',
            'customers.phone_number1',
            'customers.phone_number2',
            'customers.birthday',
            'customers.job',
            'customers.address1',
            'customers.address2',
            'customers.address3',
            'customers.identification_id1',
            'customers.note',
            'shops.name as shop_name',
            'prefectures.name as address1',
            'cities.name as address2',
        ]);
        $query->join('customers', function ($join) use ($validatedData) {
            $join->on('customers.id', '=', 'purchases.customer_id');
            if (isset($validatedData['shop_id'])) {
                $join->where('customers.shop_id', $validatedData['shop_id']);
            }
            if (isset($validatedData['address1'])) {
                $join->where('customers.address1', $validatedData['address1']);
            }
            if (isset($validatedData['address2'])) {
                $join->where('customers.address2', $validatedData['address2']);
            }
            if (isset($validatedData['name_kana']) && $validatedData['name_kana'] != "") {
                $join->where('customers.name_kana', 'like', '%' . $validatedData['name_kana'] . '%');
            }
            if (isset($validatedData['phone_number']) && $validatedData['phone_number'] != "") {
                $join->where(function ($sub) use ($validatedData) {
                    $sub->orWhere('customers.phone_number1', 'like', '%' . $validatedData['phone_number'] . '%')
                        ->orWhere('customers.phone_number2', 'like', '%' . $validatedData['phone_number'] . '%');
                });
            }
            if (isset($validatedData['birthday'])) {
                $join->where('customers.birthday', $validatedData['birthday']);
            }
        });
        $query->leftJoin('shops', function ($join) {
            $join->on('shops.id', '=', 'customers.shop_id');
        });
        $query->leftJoin('prefectures', function ($join) {
            $join->on('prefectures.id', '=', 'customers.address1');
        });
        $query->leftJoin('cities', function ($join) {
            $join->on('cities.id', '=', 'customers.address2');
        });
        $query->where('purchases.status', '>', 1);
        return $query->get();
    }
}
