<?php

namespace App\Http\Controllers;

use App\Mail\AdminOrderNotification;
use App\Mail\MyTestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function send(Request $request)
    {
        
         $recipient="zakariamourid10@gmail.com";
         $user=$request->user();
        $order = $user->orders()->latest()->first();
    try {
        
        Mail::to($recipient)->send(new AdminOrderNotification($order,$user));
        
        
        return "Test email sent to $recipient.";
    } catch (\Exception $e) {
        
        return "Error sending test email: " . $e->getMessage();
    }

       
    }
}