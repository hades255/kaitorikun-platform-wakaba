<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendEmailJob implements ShouldQueue
{
    use Queueable;

    protected $data;
    protected $view;
    /**
     * Create a new job instance.
     */
    public function __construct($data, $view)
    {
        $this->data = $data;
        $this->view = $view;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $data = $this->data;
        Mail::send($this->view, compact('data'), function ($message) use ($data) {
            $message->to($data['email'])->subject($data['subject']);
        });
    }
}
