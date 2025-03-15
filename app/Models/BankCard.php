<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankCard extends Model
{
    protected $fillable = [
        'credentials',
        'expiration_date'
    ];

    use HasFactory;
}
