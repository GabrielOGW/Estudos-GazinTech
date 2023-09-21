<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SavePessoaRequest;
use App\Http\Resources\v1\PessoaCollection;
use App\Http\Resources\v1\PessoaResource;
use App\Models\PessoaModel;

class PessoaController extends Controller
{
    public function index()
    {
        return new PessoaCollection(PessoaModel::paginate());
    }

    public function show(PessoaModel $pessoa)
    {
        return new PessoaResource($pessoa);
    }

    public function store(SavePessoaRequest $request)
    {
        PessoaModel::create($request->validated());
        return response()->json('Pessoa Criada');
    }

    public function update(SavePessoaRequest $request, PessoaModel $pessoa)
    {
        $pessoa->update($request->validated());
        return response()->json("Pessoa atualizada.");
    }

    public function destroy(PessoaModel $pessoa)
    {
        $pessoa->delete();
        return response()->json("Pessoa Excluida");
    }
}
