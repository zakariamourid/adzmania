@component('mail::message')
# new Order
Hello Admin,

A new order has been placed. Here are the order details:


<!-- make a table  -->
@component('mail::table')
| Product | Price | Status | Payment Method | Business Name | Contact Name | Email | Date |
| --------------- |:----------:| ---------:| -----------------:| ----------------:| ----------------:|----------------:|----------------:|
| {{$order->product}} | {{$order->price}}MAD| {{$order->status}} | {{$order->payment_method}} | {{$order->business_name}}|{{$order->contact_name}} | {{$order->email}} | {{$order->created_at->format('d/m/Y')}} |
@endcomponent


<!-- see all orders button  -->
@component('mail::button', ['url' => $url])
See all orders
@endcomponent
<!-- order details  -->
<br>
Business Name: {{$order->business_name}} <br>
Contact Name: {{$order->contact_name}} <br>
Payment Method: {{$order->payment_method}} <br>
Status: {{$order->status}} <br>
user name : {{$user->name}} <br>
user email : {{$user->email}} <br>
user phone : {{$user->phone}} <br>
date : {{$order->created_at->format('d/m/Y')}} <br>
Product: {{$order->product}} <br>
Price: {{$order->price}} <br>
Thanks,<br>
Adzmania

@endcomponent