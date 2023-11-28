<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class NonConformite
 *
 * @property string $id
 * @property Carbon|null $created_at
 * @property string|null $nom
 * @property string|null $prenom
 * @property string|null $type_non_conformite
 * @property string $matricule
 * @property string|null $service
 * @property int|null $criticite
 * @property string|null $reponses
 * @property string|null $commentaire
 *
 * @package App\Models
 */
class NonConformite extends Model
{
	protected $table = 'non_conformites';
	public $incrementing = false;
	public $timestamps = true;

	protected $casts = [
		'criticite' => 'int'
	];

	protected $fillable = [
        'id',
		'nom',
		'prenom',
		'matricule',
		'service',
		'criticite',
		'reponses',
		'commentaire',
        'type_non_conformite'
	];
}
