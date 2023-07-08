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
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('status', ['pending', 'process', 'delivered', 'cancelled'])->nullable(false)->default('pending');
            $table->string('payment_method')->nullable(false);
            $table->string('email');
            $table->string("website");  
            $table->string("contact_name")->nullable();
            $table->string("business_name")->nullable();
            $table->string("business_manager_id")->nullable();
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