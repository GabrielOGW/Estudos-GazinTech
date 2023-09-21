<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class PessoaModel extends Model
{
    protected $fillable = ['nome', 'email', 'data_nascimento', 'idade', 'cargo'];
    public function getDataNascimentoAttribute($value)
    {
        if ($value) {
            return Carbon::parse($value)->format('d-m-Y');
        }
        return null;
    }
}
