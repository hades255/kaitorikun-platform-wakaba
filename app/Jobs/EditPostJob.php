<?php

namespace App\Jobs;

use App\Events\EditPost;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class EditPostJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $post;
    protected $name;
    protected $schannel;

    /**
     * Create a new job instance.
     */
    public function __construct($post, $name, $schannel = "")
    {
        $this->post = $post;
        $this->name = $name;
        $this->schannel = $schannel;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new EditPost($this->post, $this->name, $this->schannel));
    }
}
