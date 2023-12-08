<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * User model
 *
 * @property string $name
 * @property string $email
 * @property string $password
 * @mixin Eloquent
 */
class Question extends \Illuminate\Database\Eloquent\Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'question';

    protected $fillable = [
        'intitule',
        'reponse_1',
        'reponse_2',
        'reponse_3',
        'reponse_4',
        'bonne_reponse',
        'theme_id',
        'description',
        'source',
    ];

    public function aVus()
    {
        return $this->hasMany(AVu::class);
    }

}