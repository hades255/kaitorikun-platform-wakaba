<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ReplyToPost implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $reply;
    public $name;
    public $schannel;

    /**
     * Create a new event instance.
     */
    public function __construct($reply, $name, $schannel)
    {
        $this->reply = $reply;
        $this->name = $name;
        $this->schannel = $schannel;
    }

    /**
     * Get the channels the event should broadcast on.
     */
    public function broadcastOn()
    {
        return new Channel('channel');
    }

    public function broadcastAs()
    {
        return 'channel.post.reply';
    }
}
