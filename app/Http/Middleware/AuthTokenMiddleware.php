<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;

class AuthTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $authToken = $request->header('X-Auth-Token');

        // Check token in database or other storage
        $isValid = \App\Models\ApiToken::where('token', Hash::make($authToken))->exists();
    
        if (!$isValid) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        return $next($request);
    }
}
