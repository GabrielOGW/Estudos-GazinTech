<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dados = [
            'name' => 'Gabriel',
            'email' => 'admin@mail.com',
            'password' => bcrypt('123456'),
        ];
        if (User::where('email', '=', $dados['email'])->count()) {
            $usuario = User::where('email', '=', $dados['email'])->first();
            $usuario->update($dados);
            echo 'usuario alterado';
        } else {
            User::create($dados);
            echo 'usuario criado';
        }
    }
}
