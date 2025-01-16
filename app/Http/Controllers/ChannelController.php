<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;

class ChannelController extends Controller 
{
   // List all channels 
   public function index() 
   {
       return Channel::all();
   }

   // Store a new channel 
   public function store(Request $request) 
   {
       // Validate and create a new channel 
       // ...
   }

   // Show a specific channel 
   public function show(Channel $channel) 
   {
       return response()->json($channel);
   }

   // Update a specific channel 
   public function update(Request $request, Channel $channel) 
   {
       // Validate and update the channel 
       // ...
   }

   // Delete a specific channel 
   public function destroy(Channel $channel) 
   {
       // Delete the channel 
       // ...
   }
}
