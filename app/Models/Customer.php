<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Customer extends Model
{
    use HasFactory;
    use SoftDeletes;

    // このモデルで使用するテーブル名
    protected $table = 'customers';

    protected $fillable = [
        "id",
        "shop_id",
        "type",
        "name",
        "name_kana",
        "phone_number1",
        "phone_number2",
        "birthday",
        "gender",
        "job",
        "address1",
        "address2",
        "address3",
        "identification_id1",
        "identification_type1",
        "identification_path1",
        "identification_id2",
        "identification_type2",
        "identification_path2",
        "document_path",
        "note",
        "hearing_item1_id",
        "hearing_item1_value",
        "hearing_item2_value",
        "hearing_line",
        "hearing_google",
        "hearing_coupon",
        "hearing_gift",
        "coupon",
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function shops(): BelongsTo
    {
        return $this->belongsTo(Shop::class);
    }
    public function prefectures(): BelongsTo
    {
        return $this->belongsTo(Prefectures::class);
    }
    public function cities(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public static function getCustomers($validatedData)
    {
        $query = self::select([
            'customers.*',
            'shops.name as shop_name',
            'prefectures.name as address1',
            'cities.name as address2',
        ]);
        $query->leftJoin('shops', function ($join) {
            $join->on('shops.id', '=', 'customers.shop_id');
        });
        $query->leftJoin('prefectures', function ($join) {
            $join->on('prefectures.id', '=', 'customers.address1');
        });
        $query->leftJoin('cities', function ($join) {
            $join->on('cities.id', '=', 'customers.address2');
        });

        if (isset($validatedData['shop_id'])) {
            $query->where('customers.shop_id', $validatedData['shop_id']);
        }
        if (isset($validatedData['address1'])) {
            $query->where('customers.address1', $validatedData['address1']);
        }
        if (isset($validatedData['address2'])) {
            $query->where('customers.address2', $validatedData['address2']);
        }
        if (isset($validatedData['name_kana']) && $validatedData['name_kana'] != "") {
            $query->where('customers.name_kana', 'like', '%' . $validatedData['name_kana'] . '%');
        }
        if (isset($validatedData['phone_number']) && $validatedData['phone_number'] != "") {
            $query->where(function ($sub) use ($validatedData) {
                $sub->orWhere('customers.phone_number1', 'like', '%' . $validatedData['phone_number'] . '%')
                    ->orWhere('customers.phone_number2', 'like', '%' . $validatedData['phone_number'] . '%');
            });
        }
        if (isset($validatedData['birthday'])) {
            $query->where('customers.birthday', $validatedData['birthday']);
        }
        $query->orderBy('id', 'ASC');

        return $query->get();
    }
}
