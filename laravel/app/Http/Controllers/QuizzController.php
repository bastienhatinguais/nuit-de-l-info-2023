<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class QuizzController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    const POINT_BONNE_REPONSE = 500;
    const MAX_QUESTION = 10;

    /**
     * Récupère la question courante de l'utilisateur ou en renvoie une nouvelle.
     *
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function currentQuestion(Request $request)
    {
        $user = $request->user();
        $currentQuestion = $user->getCurrentQuestion()->first();

        if ($currentQuestion === null) {
            $nextQuestion = $this->prepareNextQuestion($user);
            return $nextQuestion;
        }

        return $currentQuestion->makeHidden(["bonne_reponse"]);
    }

    /**
     * Traite la réponse à la question courante de l'utilisateur.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $index
     * @return array
     */
    public function answerCurrentQuestion(Request $request, int $index)
    {
        $this->validateIndex($index);

        $user = $request->user();
        $currentQuestion = $user->getCurrentQuestion()->first();

        if ($currentQuestion === null) {
            abort(400, 'L\'utilisateur n\'a pas de quizz en cours.');
        }

        if ($index === $currentQuestion->bonne_reponse) {
            $user->current_score = ($user->current_score ?? 0) + self::POINT_BONNE_REPONSE;
        }

        $nextQuestion = $this->prepareNextQuestion($user);

        return [
            "index_reponse" => $currentQuestion->bonne_reponse,
            "next_question" => $nextQuestion,
            "score" => $user->current_score
        ];
    }

    /**
     * Valide l'index de réponse.
     *
     * @param int|null $index
     * @return void
     */
    private function validateIndex(?int $index): void
    {
        if ($index === null || $index < 1 || $index > 4) {
            abort(400, 'L\'index de réponse est manquant ou incorrect.');
        }
    }

    /**
     * Prépare la prochaine question pour l'utilisateur.
     *
     * @param \App\Models\User $user
     * @return void
     */
    private function prepareNextQuestion($user): Question|null
    {
        $user->nbr_answered_question = ($user->nbr_answered_question ?? 0) + 1;

        if ($user->nbr_answered_question >= self::MAX_QUESTION) {
            // On ne renvoie pas de question suivante
            $user->nbr_answered_question = null;
            $user->meilleur_score = ($user->meilleur_score ?? 0) > $user->current_score ? $user->meilleur_score : $user->current_score;
            $user->current_score = 0;
            $user->current_question_id = null;
            $user->save();
            return null;
        }

        $newQuestion = Question::inRandomOrder()->first();

        $user->current_question_id = $newQuestion->id;
        $user->save();
        return $newQuestion->makeHidden(["bonne_reponse"]);
    }
}