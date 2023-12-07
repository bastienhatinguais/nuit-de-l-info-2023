<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * User model
 *
 * @property string $name
 * @property string $email
 * @property string $password
 * @mixin Eloquent
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'current_question_id',
        'nbr_answered_questions',
        "current_score",
        "meilleur_score",
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getCurrentQuestion(): BelongsTo
    {
        return $this->belongsTo(Question::class, 'current_question_id', 'id');
    }

    public function questionsSeen(): HasManyThrough
    {
        return $this->hasManyThrough(
            Question::class,
            AVu::class,
            'user_id', // Clé étrangère de la table intermédiaire
            'id', // Clé primaire de la table utilisateur
            'id', // Clé primaire de la table question
            'question_id' // Clé étrangère de la table intermédiaire
        );
    }
}
