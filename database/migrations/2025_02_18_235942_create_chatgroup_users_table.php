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
        Schema::create('chatgroup_users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('chatgroup_id');
            $table->bigInteger('user_id');
            $table->enum("status", ["pending", "viewed", "accepted", "rejected"])->default("pending");
            $table->string('token')->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chatgroup_users');
    }
};
