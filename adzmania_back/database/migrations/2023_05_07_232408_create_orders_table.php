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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('product');
            $table->string('price');
            $table->foreignId('user_id')->constrained();
            $table->string('status')->default('pending');
            $table->string('payment_method')->default('cih');
            $table->string("business_name");
            $table->string("contact_name");
            $table->string('email');
            $table->timestamps();

        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};