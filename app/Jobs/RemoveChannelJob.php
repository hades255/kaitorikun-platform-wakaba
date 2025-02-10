<?php

namespace App\Jobs;

use App\Events\RemoveChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RemoveChannelJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $channel;
    protected $name;
    /**
     * Create a new job instance.
     */
    public function __construct($channel, $name)
    {
        $this->channel = $channel;
        $this->name = $name;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new RemoveChannel($this->channel, $this->name));
    }
}
