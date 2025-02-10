<?php

namespace App\Jobs;

use App\Events\RemoveCommunity;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RemoveCommunityJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $community;
    protected $name;
    /**
     * Create a new job instance.
     */
    public function __construct($community, $name)
    {
        $this->community = $community;
        $this->name = $name;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new RemoveCommunity($this->community, $this->name));
    }
}
