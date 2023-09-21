<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\PessoaController;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('pessoas', PessoaController::class);
});
