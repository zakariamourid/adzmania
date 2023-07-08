@component('mail::message')
# new Order
Hello Admin,

A new order has been placed. Here are the order details:


<!-- make a table  -->
@component('mail::table')
| Order ID | Product | Price | Status | Payment Method |
|----------|---------|-------|--------|----------------|
| {{$order->id}} | {{$order->product}} | {{$order->price}}$ | {{$order->status}} | {{$order->payment_method}} |
@endcomponent
@component('mail::table')
| Website | Date | Business Email |
|---------|------|---------------------|
| {{$order->website}} | {{$order->created_at->format('d/m/Y')}} | {{$order->email}} |
@endcomponent
<br>


<!-- see all orders button  -->
@component('mail::button', ['url' => $url])
See all orders
@endcomponent
<!-- order details  -->
<br>
Business Email: {{$order->email}} <br>
Payment Method:{{$order->payment_method}} <br>
Status: {{$order->status}} <br>
user name : {{$user->first_name}} {{$user->last_name}} <br>
user email : {{$user->email}} <br>
user phone : {{$user->phone}} <br>
date : {{$order->created_at->format('d/m/Y H:i')}} <br>
Product: {{$order->product}} <br>
Price: {{$order->price}} <br>
Website: {{$order->website}} <br>
business_manager_id: {{$order->business_manager_id}} <br>
Business Name: {{$order->business_name}} <br>
Contact Name: {{$order->contact_name}} <br>
Thanks,<br>
Adzmania

@endcomponent