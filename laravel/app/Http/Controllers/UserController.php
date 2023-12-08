<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class UserController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function GetQuestionsSeenOfUser(Request $request)
    {
        $user = $request->user();
        $questions = $user->questionsSeen()->get();
        return $questions;
    }
}
