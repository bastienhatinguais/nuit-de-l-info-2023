<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('question', function (Blueprint $table) {
            $table->id();
            $table->mediumText('intitule');
            $table->string('reponse_1', 60)->nullable();
            $table->string('reponse_2', 60)->nullable();
            $table->string('reponse_3', 60)->nullable();
            $table->string('reponse_4', 60)->nullable();
            $table->integer('bonne_reponse');
            $table->mediumText('description')->nullable();
            $table->mediumText('source')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('question');
    }
};
