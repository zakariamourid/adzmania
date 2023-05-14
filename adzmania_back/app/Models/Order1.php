<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'product',
        'status',
        'price',
        'user_id',
        'business_name',
        'contact_name',
        'email',
    ];
}
