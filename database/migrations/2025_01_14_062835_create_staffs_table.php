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
        Schema::create('staffs', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('staff_id', 50)->comment('スタッフID');
            $table->unsignedInteger('system_user_id')->default(0);
            $table->string('email')->nullable()->comment('メールアドレス');
            $table->string('password')->comment('パスワード');
            $table->unsignedInteger('shop_id')->default(0)->comment('店舗ID');
            $table->unsignedInteger('user_type')->default(0)->comment('種別');
            $table->string('name', 191)->comment('お名前');
            $table->string('name_kana', 191)->comment('カタカナ名');
            $table->string('phone_number', 191)->comment('お電話番号');
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
            $table->string('history_type', 50)->nullable()->comment('履歴書');
            $table->string('history_path')->nullable();
            $table->string('working_history_type', 50)->nullable()->comment('職務経歴書');
            $table->string('working_history_path')->nullable();
            $table->unsignedInteger('guarantor_id')->nullable()->comment('連帯保証人');
            $table->string('contract_type')->nullable();
            $table->string('contract_path')->nullable()->comment('契約書画像');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staffs');
    }
};
