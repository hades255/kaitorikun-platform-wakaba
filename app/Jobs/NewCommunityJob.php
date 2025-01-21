<?php

namespace App\Jobs;

use App\Events\NewCommunity;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class NewCommunityJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $community;
    protected $channel;
    protected $name;
    /**
     * Create a new job instance.
     */
    public function __construct($community, $channel, $name)
    {
        $this->community = $community;
        $this->channel = $channel;
        $this->name = $name;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new NewCommunity($this->community, $this->channel, $this->name));
    }
}
