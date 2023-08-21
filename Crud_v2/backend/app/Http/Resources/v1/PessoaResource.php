<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PessoaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            "nome" => $this->nome,
            "email" => $this->email,
            "data_nascimento" => $this->data_nascimento,
            "idade" => $this->idade,
            "cargo" => $this->cargo
        ];
    }
}
