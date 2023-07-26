<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContatoController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contato', [ContatoController::class, 'index']);

Route::post('/contato', [ContatoController::class, 'criar']);

Route::put('/contato', [ContatoController::class, 'editar']);

// Forma abaixo não funcional a partir do Laravel versão 8
// Route::get('/contato', ['uses' => 'ContatoController@index']);

// Route::post('/contato', function () {
//     dd($_POST);
//     return "Contato Post";
// });

// Route::put('/contato', function () {
//     return "Contato Put";
// });
