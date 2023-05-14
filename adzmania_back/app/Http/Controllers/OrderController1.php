<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function orders(Request $request)
    {
       return Order::all()->where('user_id',$request->user()->id);
   
    }
    public function store(Request $request )
    {
        $order=Order::create([
            "product"=>$request->product,
	        "price"=>$request->price,
            "user_id"=>$request->user()->id,
	        "status"=>$request->status,
	        "business_name"=>$request->business_name,
            "payment_method"=>$request->payment_method,
	        "contact_name"=>$request->contact_name,
            "email"=>$request->user()->email,           
        ]);
        return response([
            'orde1' => $order,
        ]);
    }
    function destroy(Request $request){
        $order=Order::find($request->id);
        if(!$order){
            return response([
                'message' => 'order not found',
            ]);
        }
        $order->delete();
        return response([
            'message' => 'order deleted successfully',
        ]);
        
    }
}