import { Component, OnInit } from '@angular/core';
import { Question } from '@models/question.model';
import { QuestionService } from '@services/question/question.service';
import { Answer } from '@models/answer.model';
import { AnswerService } from '@services/answer/answer.service';
import { NavigationExtras, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})
export class QuizzComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
    private router: Router,
    private domSanitizer: DomSanitizer
  ) {}

  public question: Question;
  public reponses: string[];
  public answer: Answer;
  public correct: Boolean;
  public displayAnswer: Boolean;
  public navigationExtras: NavigationExtras = {
    state:{
      data: {
        score: 0
      }
    }
  }
  ngOnInit(): void {
    this.questionService.currentQuestion$().subscribe({
      next: (question: Question) => {
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
        this.displayAnswer = true;
        this.answer = answer;
        if(answer.next_question){
          localStorage.setItem('score', answer.score.toString());
        }
        if (answer.index_reponse == id) {
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
  
  public goToBravo(){
    this.router.navigate(['/bravo'])
  }

  public goToHome(){
    this.router.navigate([''])
  }

  public sanitize(url: string){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
