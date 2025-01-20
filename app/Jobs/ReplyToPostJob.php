<?php

namespace App\Jobs;

use App\Events\ReplyToPost;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ReplyToPostJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reply;
    protected $name;
    /**
     * Create a new job instance.
     */
    public function __construct($reply, $name)
    {
        $this->reply = $reply;
        $this->name = $name;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new ReplyToPost($this->reply, $this->name));
    }
}
