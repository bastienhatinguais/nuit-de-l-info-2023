import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '@models/question.model';
import { QuestionService } from '@services/question/question.service';
import { Answer } from '@models/answer.model';
import { AnswerService } from '@services/answer/answer.service';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})
export class QuizzComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  public question: Question;
  public reponses: string[];
  public answer: Answer;
  public correct: Boolean;
  public displayAnswer: Boolean;

  ngOnInit(): void {
    this.questionService.currentQuestion$().subscribe({
      next: (question: Question) => {
        console.log(question);
        this.question = question;
        this.reponses = [
          question.reponse_1,
          question.reponse_2,
          question.reponse_3,
          question.reponse_4,
        ];
      },
      error: (erreur) => {
        console.log(erreur);
      },
    });
  }

  validerReponse(id: number): void {
    this.answerService.currentAnswer$(id).subscribe({
      next: (answer: Answer) => {
        console.log('Answer');
        console.log(answer);
        this.displayAnswer = true;
        this.answer = answer;
        if (answer.index_reponse == id) {
          console.log('true');
          this.correct = true;
        } else {
          this.correct = false;
        }
      },
      error: (erreur) => {
        console.log(erreur);
      },
    });
  }

  prochaineQuestion(question: Question): void {
    if(question){
      console.log('Question');
      console.log(question);
      this.displayAnswer = false;
      this.question = question;
      this.reponses = [
        question.reponse_1,
        question.reponse_2,
        question.reponse_3,
        question.reponse_4,
      ];
    }else{
      //rediriger vers la route de fin
    }
    
  }
}
