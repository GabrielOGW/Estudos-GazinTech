<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\Pessoa;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('pessoas', Pessoa::class);
});
