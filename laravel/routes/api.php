<?php

use App\Http\Controllers\QuizzController;
use App\Http\Controllers\UserController;
use App\Models\NonConformite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['api']], function () {
    Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::middleware(['auth:sanctum'])->get('/current-question', [QuizzController::class, 'currentQuestion']);
    Route::middleware(['auth:sanctum'])->get('/answer-current-question/{id}', [QuizzController::class, 'answerCurrentQuestion']);
    Route::middleware(['auth:sanctum'])->get('/user/question', [UserController::class, 'GetQuestionsSeenOfUser']);

});

require __DIR__ . '/auth.php';
