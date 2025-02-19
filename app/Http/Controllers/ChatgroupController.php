<?php

namespace App\Http\Controllers;

use App\Models\Chatgroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ChatgroupController extends Controller
{
    public function store(Request $request)
    {
        try {
            $result = DB::transaction(function () use ($request) {
                $validatedData = $request->validate([
                    'name' => 'required|string|max:255',
                    'users.*' => 'required',
                ]);

                $group = new Chatgroup();
                $group->name = $validatedData['name'];
                $group->user_id = Auth::id();
                $group->save();

                $group->users()->attach(Auth::id(), ['status' => 'accepted']);
                foreach ($request->users as $user) {    //  todo    send email to users
                    $group->users()->attach($user['id'], ['status' => 'pending']);
                }

                return $group;
            });

            return response()->json($result, 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Failed to create community', "message" => $th->getMessage()], 500);
        }
    }
}
