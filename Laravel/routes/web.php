<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\Admin\CursoController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\LoginController;

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

Route::get('/', [HomeController::class, 'index'])->name('site.home');

Route::get('/login', [LoginController::class, 'index'])->name('site.login');
Route::get('/login/sair', [LoginController::class, 'sair'])->name('site.login.sair');
Route::post('/login/entrar', [LoginController::class, 'entrar'])->name('site.login.entrar');


Route::group(['middleware' => 'auth'], function () {
  Route::get('/admin/cursos', [CursoController::class, 'index'])->name('admin.cursos');
  Route::get('/admin/cursos/adicionar', [CursoController::class, 'adicionar'])->name('admin.cursos.adicionar');
  Route::post('/admin/cursos/salvar', [CursoController::class, 'salvar'])->name('admin.cursos.salvar');
  Route::get('/admin/cursos/editar/{id}', [CursoController::class, 'editar'])->name('admin.cursos.editar');
  Route::put('/admin/cursos/atualizar/{id}', [CursoController::class, 'atualizar'])->name('admin.cursos.atualizar');
  Route::get('/admin/cursos/deletar/{id}', [CursoController::class, 'deletar'])->name('admin.cursos.deletar');
});



// Rota abaixo é a forma como era feito em versões antigas do Laravel(como passado no curso)
// Route::get('/admin/cursos', ['as' => 'admin cursos', 'uses' => 'admin\CursoController@index ']);

// Route::get('/contato', [ContatoController::class, 'index']);

// Route::post('/contato', [ContatoController::class, 'criar']);

// Route::put('/contato', [ContatoController::class, 'editar']);

// Forma abaixo não funcional a partir do Laravel versão 8
// Route::get('/contato', ['uses' => 'ContatoController@index']);

// Route::post('/contato', function () {
//     dd($_POST);
//     return "Contato Post";
// });

// Route::put('/contato', function () {
//     return "Contato Put";
// });
