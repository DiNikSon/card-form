<?php

use App\Http\Controllers\api\v1\ExampleController;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| API v1 Routes
|--------------------------------------------------------------------------
|
| This file contains all of the v1 routes.
| This file is loaded and the routes are pre-pended automatically
| by App\Providers\RouteServiceProvider->boot()
|
*/

// Authenticated API (sanctum)
Route::group([
    'middleware' => ['api_authenticated']
], function() {

    Route::get('/example-authenticated', [ExampleController::class, 'authenticated']);

});

// Public API
Route::group([
    'middleware' => ['api_public'],
], function () {



});
