import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { QuestionService } from '@services/question/question.service';
import { Question } from '@models/question.model';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  constructor(
    private questionService: QuestionService
  ){}

  public questions: Question[];

  ngOnInit(): void {
    initFlowbite();

    this.questionService.questions$().subscribe({
      next: (questions: Question[]) => {
        console.log(questions);
        this.questions = questions;
      },
      error: (erreur) => {
        console.log(erreur);
      },
    });
  }


}
