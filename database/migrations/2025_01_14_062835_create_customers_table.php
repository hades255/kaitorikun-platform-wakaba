<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->integer('id', true);
            $table->unsignedInteger('shop_id')->default(0)->comment('店舗ID');
            $table->unsignedInteger('type')->default(0)->comment('来店経緯');
            $table->string('name', 191)->comment('名前');
            $table->string('name_kana', 191)->comment('カタカナ名');
            $table->string('phone_number1', 191)->comment('電話番号(自宅)');
            $table->string('phone_number2', 191)->comment('電話番号(携帯)');
            $table->date('birthday')->comment('生年月日');
            $table->boolean('gender')->comment('性別');
            $table->string('zipcode', 191)->comment('郵便番号');
            $table->unsignedInteger('address1')->default(0)->comment('都道府県');
            $table->unsignedInteger('address2')->default(0)->comment('市町村');
            $table->string('address3', 191)->comment('住所詳細');
            $table->unsignedInteger('identification_id1')->nullable()->comment('本人確認書類ID');
            $table->string('identification_type1', 50)->nullable();
            $table->string('identification_path1')->nullable();
            $table->unsignedInteger('identification_id2')->nullable();
            $table->string('identification_type2', 50)->nullable();
            $table->string('identification_path2')->nullable();
            $table->text('note')->nullable()->comment('特記事項');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
