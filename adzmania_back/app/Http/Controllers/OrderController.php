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
              
        // $order=$request->validate(
        //     [
        //     "product"=>['required'],
	    //     "price"=>['required'],
	    //     "status"=>['required'],
	    //     "business_name"=>['required'],
	    //     "contact_name"=>$['required'],
        //     ]
        // );
 

        $order=Order::create([
            "product"=>$request->product,
	        "price"=>$request->price,
	        "status"=>$request->status,
	        "business_name"=>$request->business_name,
	        "contact_name"=>$request->contact_name,
            "user_id"=>$request->user()->id,
            "email"=>$request->user()->email,
        ]);
        return response([
            'order' => $order,
        ]);
    }
    function destroy(Request $request){
        $order=Order::find($request->id);
        
        $order->delete();
        return response([
            'message' => 'order deleted successfully',
        ]);
        
    }
}