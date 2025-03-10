<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::select('id', 'name')->get();
        return response()->json($users);
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
        //
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

    public function search_users(Request $request)
    {
        $search = $request->search;
        // $users = User::where(function ($query) use ($search) {
        //     $query->where('name', 'like', '%' . $search . '%')
        //         ->orWhere('email', 'like', '%' . $search . '%');
        // })
        //     ->select('id', 'name', 'email')
        //     ->get();

        $users = User::where(function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        })->orWhereHas('role', function ($query) use ($search) {
            $query->where('role_name', 'like', '%' . $search . '%');
        })->with('role')->select('id', 'name', 'email', 'role')->get();
        return response()->json($users);
    }
}
