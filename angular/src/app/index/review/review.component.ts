import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { QuestionService } from '@services/question/question.service';
import { Question } from '@models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  constructor(
    private questionService: QuestionService,
    private router: Router,
  ){}

  public questions: Question[];

  ngOnInit(): void {
    initFlowbite();

    this.questionService.questions$().subscribe({
      next: (questions: Question[]) => {
        this.questions = questions;
      },
      error: (erreur) => {
        console.log(erreur);
      },
    });
  }

  public goToHome(){
    this.router.navigate([''])
  }

}
