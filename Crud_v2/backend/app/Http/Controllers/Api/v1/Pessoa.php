<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\SavePessoaRequest;
use App\Http\Resources\v1\PessoaCollection;
use App\Http\Resources\v1\PessoaResource;
use App\Models\Pessoa as PessoaModel;
use Illuminate\Http\Request;

class Pessoa extends Controller
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
