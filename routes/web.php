<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SaveController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('/profiles', ProfileController::class)->middleware(['auth']);
Route::resource('/likes', LikeController::class)->middleware(['auth']);
Route::resource('/saves', SaveController::class);
Route::resource('/posts', PostController::class);
Route::resource('/comments', CommentController::class);

require __DIR__ . '/auth.php';
