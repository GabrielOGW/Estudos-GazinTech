<?php

use App\Http\Controllers\Api\v1\Pessoa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('pessoas', Pessoa::class);
});
