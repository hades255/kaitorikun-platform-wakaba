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
        Schema::table('post_replies', function (Blueprint $table) {
            $table->dropForeign(['channel_id']);
            $table->dropColumn('channel_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('post_replies', function (Blueprint $table) {
            $table->unsignedBigInteger('channel_id')->nullable();
        });
    }
};
