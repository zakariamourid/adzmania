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
        //  get the count of orders that their status is pending
        $pendingOrdersCount = Order::where('user_id', $user->id)->where('status', 'pending')->count();
        //  get the count of orders that their status is delivered
        $deliveredOrdersCount = Order::where('user_id', $user->id)->where('status', 'delivered')->count();
        //  get the count of orders that their status is canceled
        $processOrdersCount = Order::where('user_id', $user->id)->where('status', 'process')->count();
       
    //    $orders = Order::select('id as order_id','product','payment_method as payment_mode','status','price as amount','user_id','created_at')
    //             ->where('user_id', $user->id)
    //             ->get()->map(function ($order) {
    //                 $order->created_at = $order->created_at->format('d/m/Y');
    //                 return $order;
    //             });

    //         return response()->json($orders);
    // $orderCollection = new OrderCollection($orders);
    
return  new OrderCollection($orders); //and add the counts to the response
// return response()->json([
//     'data' => new OrderCollection($orders),
    // 'pendingOrdersCount' => $pendingOrdersCount,
    // 'deliveredOrdersCount' => $deliveredOrdersCount,
    // 'processOrdersCount' => $processOrdersCount,
// ]);

    
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
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