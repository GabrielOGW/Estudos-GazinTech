<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contato;

class ContatoController extends Controller
{
    public function index()
    {

        $contatos = [
            (object)["nome" => "Maria", "tel" => "44 12345-6789"],
            (object)["nome" => "Joao", "tel" => "43 12345-4444"],
            (object)["nome" => "Jose", "tel" => "41 12345-1342"]
        ];

        $contato = new Contato();
        $con = $contato->lista();
        dd($con->nome);

        return view('contato.index', compact('contatos'));
    }
    public function criar(Request $req)
    {
        dd($req->all());
        return "Criar of Contato Controller";
    }
    public function Editar(Request $req)
    {
        dd($req['nome']);
        return "Editar of Contato Controller";
    }
}
