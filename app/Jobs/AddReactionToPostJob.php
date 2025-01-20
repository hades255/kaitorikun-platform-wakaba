<?php

namespace App\Jobs;

use App\Events\AddReactionToPost;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AddReactionToPostJob implements ShouldQueue
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
        broadcast(new AddReactionToPost($this->reaction, $this->name));
    }
}
