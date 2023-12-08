<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'intitule' => fake()->sentence(),
            'description' => fake()->sentence(),
            'source' => fake()->sentence(),
            'reponse_1' => fake()->word(),
            'reponse_2' => fake()->word(),
            'reponse_3' => fake()->word(),
            'reponse_4' => fake()->word(),
            'bonne_reponse' => random_int(1, 4)
        ];
    }
}
