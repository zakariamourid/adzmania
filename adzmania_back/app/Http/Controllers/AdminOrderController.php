<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminOrderController extends Controller
{
    public function index(Request $request )
    {
        $orders=Order::all();
        return  new OrderCollection($orders); 
    }
    public function show(Request $request, $id)
    {
        $order=Order::find($id);
        return  new OrderCollection($order); 
    }
    public function update(Request $request, $id)
    {
        $order=Order::find($id);
        if(!$order){
            return response()->json([
                'message' => 'Order not found',
            ], 404);
        }
        
        $order->status=$request->status;
        if($request->amount){
            $order->price=$request->amount;
        }
       if($request->payment_mode){
        $order->payment_method=$request->payment_mode;
       }
        if($request->product){
            $order->product=$request->product;
        }
            
        $order->save();
        return  new OrderResource($order); 
    }
     public function destroy(Request $request, $id){
        $order=Order::find($id);
        if(!$order){
            return response()->json([
                'message' => 'Order not found',
            ], 404);
        }
        $order->delete();
        return response()->json([
            'message' => 'Order deleted successfully',
        ]);
     }
    

}