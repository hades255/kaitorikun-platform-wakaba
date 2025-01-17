<?php

namespace App\Jobs;

use App\Events\NewChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class NewChannelJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $channel;
    /**
     * Create a new job instance.
     */
    public function __construct($channel)
    {
        $this->channel = $channel;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new NewChannel($this->channel));
    }
}
