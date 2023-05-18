<?php

namespace App\Http\Controllers;


use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       $user = Auth::user();
        $orders=Order::where('user_id',$user->id)->paginate();
 
    
return  new OrderCollection($orders); 

    
    }
    public function store(Request $request)
    {
        
            $request->validate(
                [
                    'product' => 'required',
                    'price' => 'required',
                    'business_name' => 'required',
                    'contact_name' => 'required',
                    "payment_method"=>'required',
                  
                ]
                );
                 
            $order=Order::create([
            "product"=>$request->product,
	        "price"=>$request->price,
            "user_id"=>$request->user()->id,
	        "status"=>'pending',
            "payment_method"=>$request->payment_method,
	        "business_name"=>$request->business_name,
	        "contact_name"=>$request->contact_name,
             "email"=>$request->user()->email,
      
        ]);
        return response()->json([
            'message' => 'Order created successfully',
            'payment_mode' => $order->payment_method,
            'order' => $order,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}