<?php

namespace App\Jobs;

use App\Events\DeletePost;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class DeletePostJob implements ShouldQueue
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
        broadcast(new DeletePost($this->post, $this->name, $this->schannel));
    }
}
