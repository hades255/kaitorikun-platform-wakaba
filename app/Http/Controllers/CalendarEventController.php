<?php

namespace App\Http\Controllers;

use App\Models\CalendarEvent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class CalendarEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = CalendarEvent::where('user_id', Auth::id())->get();
        return response()->json($events);
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
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'start' => 'required|string|max:255',
            'end' => 'required|string|max:255',
            'public' => 'nullable|boolean',
        ]);
        $event = new CalendarEvent();
        $event->title = $validatedData['title'];
        $event->description = $validatedData['description'];
        $event->start = $validatedData['start'];
        $event->end = $validatedData['end'];
        $event->public = $validatedData['public'];
        $event->user_id = Auth::id();
        if ($event->save()) {
            return response()->json($event, 201);
        }
        return response()->json(['error' => 'Failed to create event'], 500);
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
    public function edit(CalendarEvent $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CalendarEvent $event)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'start' => 'required|string|max:255',
            'end' => 'required|string|max:255',
            'public' => 'nullable|boolean',
        ]);

        $event->title = $validatedData['title'];
        $event->description = $validatedData['description'];
        $event->start = $validatedData['start'];
        $event->end = $validatedData['end'];
        $event->public = $validatedData['public'];

        if ($event->save()) {
            return response()->json($event, 200);
        }

        return response()->json(['error' => 'Failed to update event'], 500);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CalendarEvent $event)
    {
        $event->delete();
        return response()->noContent();
    }
}
