<?php

namespace App\Http\Controllers;


use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Mail\AdminOrderNotification;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
   
    public function index()
    {
       $user = Auth::user();
        $orders=Order::where('user_id',$user->id)->paginate(5000);
 
    
return  new OrderCollection($orders); 

    
    }
    public function store(Request $request)
    {
        
            $request->validate(
                [
                    'product' => 'required',
                    'price' => 'required',
                    "payment_method"=>'required',
                    "website"=>'required',
                    'email' => 'required|email',
                  
                ]
                );
                 
        try{
            $order=Order::create([
            "product"=>$request->product,
	        "price"=>$request->price,
            "user_id"=>$request->user()->id,
	        "status"=>'pending',
            "payment_method"=>$request->payment_method,
	        "business_name"=>$request->business_name,
	        "contact_name"=>$request->contact_name,
            "website" => $request->website,
            "business_manager_id"=>$request->business_manager_id,
            "email"=>$request->user()->email,
        ]);

        $user=$request->user();
    
        dispatch (function () use ($order, $user) {
    Mail::to("xahivo2618@niback.com")->send(new AdminOrderNotification($order,$user));
    // Mail::to("zakariamourid10@gmail.com")->send(new AdminOrderNotification($order,$user));
        })->afterResponse();
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Order not created',
                'error' => $e->getMessage().$request->website,
            ], 400);
        }
        return response()->json([
            'message' => 'Order created successfully '.$request->website,
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