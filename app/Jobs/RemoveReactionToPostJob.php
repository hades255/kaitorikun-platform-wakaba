<?php

namespace App\Jobs;

use App\Events\RemoveReactionToPost;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RemoveReactionToPostJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reaction;
    protected $name;
    /**
     * Create a new job instance.
     */
    public function __construct($reaction, $name)
    {
        $this->reaction = $reaction;
        $this->name = $name;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new RemoveReactionToPost($this->reaction, $this->name));
    }
}
