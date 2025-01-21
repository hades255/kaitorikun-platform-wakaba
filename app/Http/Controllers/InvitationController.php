<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvitationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|max:255',
            'community_id' => 'required|integer',
        ]);
        $userId = Auth::id();
        $email = $validatedData["email"];
        $receiver = User::where("email", $email)->first();
        if ($receiver) {
            $token = hash("sha256", $email);
            $invitation = new Invitation();
            $invitation->sender_id = $userId;
            $invitation->community_id = $validatedData["community_id"];
            $invitation->receiver_id = $receiver->id;
            $invitation->token = $token;
            if ($invitation->save()) {
                //  todo    send mail to the receiver
                return response()->json($invitation, 201);
            }
            return response()->json(['error' => 'Failed to send invitation'], 500);
        }
        return response()->json(['error' => 'user not found'], 404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
