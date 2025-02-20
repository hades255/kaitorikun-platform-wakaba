<?php

namespace App\Jobs;

use App\Events\ReactionToChat;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ReactionToChatJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $reaction;
    public $user;

    /**
     * Create a new job instance.
     */
    public function __construct($reaction, $user)
    {
        $this->reaction = $reaction;
        $this->user = $user;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new ReactionToChat($this->reaction, $this->user));
    }
}
