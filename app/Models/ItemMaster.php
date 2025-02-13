<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ItemMaster extends Model
{
    use HasFactory;
    use SoftDeletes;

    // このモデルで使用するテーブル名
    protected $table = 'item_master';

    protected $fillable = [
        "id",
        "name",
        "category1",
        "category2",
        "category3",
        "category4",
        "category5",
        "category6",
        "flag",
        "accessories",
        "operation",
        "machine",
        "size",
        "twist",
        "links_num",
        "extra_links_num",
        "overhaul",
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
    public function categories1(): BelongsTo
    {
        return $this->belongsTo(Category1::class);
    }
    public function categories2(): BelongsTo
    {
        return $this->belongsTo(Category1::class);
    }
    public function categories3(): BelongsTo
    {
        return $this->belongsTo(Category1::class);
    }
    public function categories4(): BelongsTo
    {
        return $this->belongsTo(Category1::class);
    }
    public function categories5(): BelongsTo
    {
        return $this->belongsTo(Category1::class);
    }
    public function categories6(): BelongsTo
    {
        return $this->belongsTo(Category1::class);
    }
    public function accessories(): BelongsTo
    {
        return $this->belongsTo(AccessoriesMaster::class);
    }
    public function operation(): BelongsTo
    {
        return $this->belongsTo(OperationMaster::class);
    }
    public function machine(): BelongsTo
    {
        return $this->belongsTo(MachineMaster::class);
    }
    public function size(): BelongsTo
    {
        return $this->belongsTo(SizeMaster::class);
    }
    public function twist(): BelongsTo
    {
        return $this->belongsTo(TwistMaster::class);
    }
    public function overhaul(): BelongsTo
    {
        return $this->belongsTo(OverhaulMaster::class);
    }
    public static function getItems($validatedData)
    {
        $query = self::select([
            'item_master.*',
            'categories1.name as category1',
            'categories2.name as category2',
            'categories3.name as category3',
            'categories4.name as category4',
            'categories5.name as category5',
            'categories6.name as category6',
            'flag_master.name as flag',
            'accessories_master.name as accessories',
            'operation_master.name as operation',
            'machine_master.name as machine',
            'size_master.name as size',
            'twist_master.name as twist',
            'overhaul_master.name as overhaul',
        ]);
        $query->leftJoin('categories1', function ($join) use ($validatedData) {
            $join->on('categories1.id', '=', 'item_master.category1')
                ->whereNull('categories1.deleted_at');
        });
        $query->leftJoin('categories2', function ($join) use ($validatedData) {
            $join->on('categories2.id', '=', 'item_master.category2')
                ->whereNull('categories2.deleted_at');
        });
        $query->leftJoin('categories3', function ($join) use ($validatedData) {
            $join->on('categories3.id', '=', 'item_master.category3')
                ->whereNull('categories3.deleted_at');
        });
        $query->leftJoin('categories4', function ($join) use ($validatedData) {
            $join->on('categories4.id', '=', 'item_master.category4')
                ->whereNull('categories4.deleted_at');
        });
        $query->leftJoin('categories5', function ($join) use ($validatedData) {
            $join->on('categories5.id', '=', 'item_master.category5')
                ->whereNull('categories5.deleted_at');
        });
        $query->leftJoin('categories6', function ($join) use ($validatedData) {
            $join->on('categories6.id', '=', 'item_master.category6')
                ->whereNull('categories6.deleted_at');
        });
        $query->leftJoin('flag_master', function ($join) use ($validatedData) {
            $join->on('flag_master.id', '=', 'item_master.flag')
                ->whereNull('flag_master.deleted_at');
        });
        $query->leftJoin('accessories_master', function ($join) use ($validatedData) {
            $join->on('accessories_master.id', '=', 'item_master.accessories')
                ->whereNull('accessories_master.deleted_at');
        });
        $query->leftJoin('operation_master', function ($join) use ($validatedData) {
            $join->on('operation_master.id', '=', 'item_master.operation')
                ->whereNull('operation_master.deleted_at');
        });
        $query->leftJoin('machine_master', function ($join) use ($validatedData) {
            $join->on('machine_master.id', '=', 'item_master.machine')
                ->whereNull('machine_master.deleted_at');
        });
        $query->leftJoin('size_master', function ($join) use ($validatedData) {
            $join->on('size_master.id', '=', 'item_master.size')
                ->whereNull('size_master.deleted_at');
        });
        $query->leftJoin('twist_master', function ($join) use ($validatedData) {
            $join->on('twist_master.id', '=', 'item_master.twist')
                ->whereNull('twist_master.deleted_at');
        });
        $query->leftJoin('overhaul_master', function ($join) use ($validatedData) {
            $join->on('overhaul_master.id', '=', 'item_master.overhaul')
                ->whereNull('overhaul_master.deleted_at');
        });

        $query->where('item_master.name', 'like', '%' . $validatedData['item_name'] . '%');
        $query->where('item_master.category1', $validatedData['category1']);
        if (isset($validatedData['category2']) && $validatedData['category2'] != 0) {
            $query->where('item_master.category2', $validatedData['category2']);
        }
        if (isset($validatedData['category3']) && $validatedData['category3'] != 0) {
            $query->where('item_master.category3', $validatedData['category3']);
        }
        if (isset($validatedData['category4']) && $validatedData['category4'] != 0) {
            $query->where('item_master.category4', $validatedData['category4']);
        }
        if (isset($validatedData['category5']) && $validatedData['category5'] != 0) {
            $query->where('item_master.category5', $validatedData['category5']);
        }
        if (isset($validatedData['category6']) && $validatedData['category6'] != 0) {
            $query->where('item_master.category6', $validatedData['category6']);
        }
        $query->orderBy('id', 'ASC');

        return $query->get();
    }
}
