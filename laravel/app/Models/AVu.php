<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * User model
 *
 * @property string $name
 * @property string $email
 * @property string $password
 * @mixin Eloquent
 */
class AVu extends Model
{
    protected $table = 'a_vu';

    protected $fillable = [
        'question_id',
        'user_id',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}