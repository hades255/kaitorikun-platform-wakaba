<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('communities', function (Blueprint $table) {
            $table->dropColumn('icon');
        });
        Schema::table('communities', function (Blueprint $table) {
            // $table->mediumBlob('icon')->nullable();
            DB::statement('ALTER TABLE `communities` ADD `icon` MEDIUMBLOB NULL');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('communities', function (Blueprint $table) {
            $table->dropColumn('icon');
        });
        Schema::table('communities', function (Blueprint $table) {
            $table->string('icon')->nullable();
        });
    }
};
