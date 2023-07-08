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

        \App\Models\User::create([
            'first_name' => 'zakaria',
            'last_name' => 'mourid',
            'email' => 'zakariamourid10@gmail.com',
            'password' => bcrypt('12345678'),
            'phone' => '0666666666',
        ]);
           \App\Models\User::create([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'role'=>'admin',
            'email' => 'adminzakaria@gmail.com',
            'password' => bcrypt('12345678'),
            'phone' => '0663054819',
        ]);

 
        // });
        \App\Models\Order::create([
            'product' => 'meta',
            'price' => '100',
            'user_id' => 
            \App\Models\User::where('first_name', 'zakaria')->first()->id
            ,
            'status' => 'pending',
            'payment_method' => 'cih',
            'business_name' => 'adzmania',
            'contact_name' => 'mohamed',
            'email' => 'zakaria@gmail.com',
            'business_manager_id' => '123456789',
            'website' => 'adzmania.com',
        ]);
    }
}