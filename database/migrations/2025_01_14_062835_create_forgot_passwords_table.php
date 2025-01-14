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
        Schema::create('forgot_passwords', function (Blueprint $table) {
            $table->comment('パスワードをお忘れですか？');
            $table->increments('id');
            $table->string('email', 100)->default('0')->comment('メールアドレス');
            $table->string('token')->default('0')->comment('シークレットキー');
            $table->integer('time')->nullable()->comment('有効期間');
            $table->timestamp('created_at')->nullable()->comment('作成された日時');
            $table->timestamp('updated_at')->nullable()->comment('更新された日時');
            $table->softDeletes()->comment('削除された日時');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forgot_passwords');
    }
};
