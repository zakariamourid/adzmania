<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'zakariamourid10@gmail.com',
            'password' => bcrypt('12345678'),
            'phone' => '0666666666',
        ]);
        // create an order 
        //   Schema::create('orders', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('product');
        //     $table->string('price');
        //     $table->foreignId('user_id')->constrained();
        //     $table->string('status')->default('pending');
        //     $table->string('payment_method')->default('cih');
        //     $table->string("business_name");
        //     $table->string("contact_name");
        //     $table->string('email');
        //     $table->timestamps();

        // });
        \App\Models\Order::create([
            'product' => 'meta',
            'price' => '100',
            'user_id' => 
            \App\Models\User::where('first_name', 'admin')->first()->id
            ,
            'status' => 'pending',
            'payment_method' => 'cih',
            'business_name' => 'adzmania',
            'contact_name' => 'mohamed',
            'email' => 'zakaria@gmail.com'
        ]);
    }
}