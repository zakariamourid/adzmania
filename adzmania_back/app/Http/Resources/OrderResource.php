<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $phone=User::find($this->user_id)->phone;
        return [
            'id' => $this->id,
            'product' => $this->product,
            'status' => $this->status,
            'amount' => $this->price,
            'user_id' => $this->user_id,
            'payment_mode' => $this->payment_method,
            'phone'=>$phone,
            'business_name' => $this->business_name,
            'contact_name' => $this->contact_name,
            'email' => $this->email,
            'date' => $this->created_at,
            'website' => $this->website,
            'business_manager_id' => $this->business_manager_id,
                //    $orders = Order::select('id as order_id','product','payment_method as payment_mode','status','price as amount','user_id','created_at')
    //             ->where('user_id', $user->id)
    //             ->get()->map(function ($order) {
    //                 $order->created_at = $order->created_at->format('d/m/Y');
        ];
    }
}