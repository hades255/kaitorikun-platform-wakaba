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
        Schema::table('communities', function (Blueprint $table) {
            $table->string('guideline')->nullable()->default("コミュニティのメンバーに対して親切で敬意を持って接してください。失礼な態度や残酷な態度はとらないでください。自分らしく参加し、違反する投稿はしないでください");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('communities', function (Blueprint $table) {
            $table->dropColumn('guideline');
        });
    }
};
