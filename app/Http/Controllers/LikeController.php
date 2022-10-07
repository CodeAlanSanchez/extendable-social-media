<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLikeRequest;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function store(StoreLikeRequest $request)
    {
        $validated = $request->validated();

        $like = Like::create(array_merge($validated, ['user_id' => Auth::user()->id]));

        return response()->json($like);
    }
}
