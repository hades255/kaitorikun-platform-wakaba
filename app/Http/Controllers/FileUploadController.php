<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'files.*' => 'required|file|max:20480', // 20 MB max size
        ]);

        $filesData = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $path = $file->store('uploads', 'public');

                $filesData[] = [
                    'content' => $file->getClientOriginalName(),
                    'other' => [
                        "path" => $path,
                        'size' => $file->getSize(),
                    ],
                    'type' => $file->getMimeType(),
                ];
            }

            return response()->json(['files' => $filesData], 200);
        }

        return response()->json(['error' => 'Files not uploaded'], 400);
    }
}
