<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SavePessoaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome' => ['required', 'min:3', 'max:50'],
            'email' => ['required', 'email', 'max:255'],
            'data_nascimento' => ['required', 'date'],
            'idade' => ['required', 'integer', 'min:0'],
            'cargo' => ['required', 'string', 'max:255'],
        ];
    }
}