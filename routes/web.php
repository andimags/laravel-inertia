<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TweetController;

// Route::get('/', function () {
//     return view('app');
// });

Route::resource('/tweets', TweetController::class);