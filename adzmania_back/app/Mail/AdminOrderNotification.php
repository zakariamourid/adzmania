<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AdminOrderNotification extends Mailable 
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     * 
     */
    

    public function __construct( protected $order ,protected $user)

    {
        //

    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'new order from '.$this->user->first_name.' '.$this->user->last_name.'',
            
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.admin-order-notification',
            with: [
                
                'order'=> $this->order,
                'user'=>$this->user,
                'date' => date('Y-m-d H:i:s', strtotime($this->order->created_at)),
                'url'=>url('http://web.adzmania.test/orders'),

            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}