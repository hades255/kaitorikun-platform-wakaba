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
    protected $schannel;
    /**
     * Create a new job instance.
     */
    public function __construct($reaction, $name, $schannel = "")
    {
        $this->reaction = $reaction;
        $this->name = $name;
        $this->schannel = $schannel;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new AddReactionToPost($this->reaction, $this->name, $this->schannel));
    }
}
