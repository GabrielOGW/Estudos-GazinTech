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
            'email' => ['required', 'email', 'max:255', 'unique:pessoas,email'],
            'data_nascimento' => ['required', 'date'],
            'idade' => ['required', 'integer', 'min:0'],
            'cargo' => ['required', 'string', 'max:255'],
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'nome.required' => 'O campo nome é obrigatório.',
            'nome.min' => 'O campo nome deve ter pelo menos 3 caracteres.',
            'nome.max' => 'O campo nome não deve ter mais de 50 caracteres.',
            'email.required' => 'O campo email é obrigatório.',
            'email.email' => 'O campo email deve ser um endereço de e-mail válido.',
            'email.max' => 'O campo email não deve ter mais de 255 caracteres.',
            'email.unique' => 'Este endereço de e-mail já está em uso.',
            'data_nascimento.required' => 'O campo data de nascimento é obrigatório.',
            'data_nascimento.date' => 'O campo data de nascimento deve ser uma data válida.',
            'idade.required' => 'O campo idade é obrigatório.',
            'idade.integer' => 'O campo idade deve ser um número inteiro.',
            'idade.min' => 'O campo idade não deve ser negativo.',
            'cargo.required' => 'O campo cargo é obrigatório.',
            'cargo.string' => 'O campo cargo deve ser uma string.',
            'cargo.max' => 'O campo cargo não deve ter mais de 255 caracteres.',
        ];
    }
}
