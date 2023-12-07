<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class QuestionController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function getQuestion()
    {
        return Question::inRandomOrder()->first();
    }
}
