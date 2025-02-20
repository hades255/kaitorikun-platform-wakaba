<?php

namespace App\Jobs;

use App\Events\ReadChat;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ReadChatJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $chat;

    /**
     * Create a new job instance.
     */
    public function __construct($chat)
    {
        $this->chat = $chat;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        broadcast(new ReadChat($this->chat));
    }
}
