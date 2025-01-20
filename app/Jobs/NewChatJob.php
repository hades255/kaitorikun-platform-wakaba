<?php

namespace App\Jobs;

use App\Events\NewChat;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class NewChatJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $chat;
    protected $name;

    /**
     * Create a new job instance.
     */
    public function __construct($chat, $name)
    {
        $this->chat = $chat;
        $this->name = $name;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new NewChat($this->chat, $this->name));
    }
}
