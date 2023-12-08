import { Injectable } from '@angular/core';
import { Question } from '@models/question.model';
import { ApiService } from '@services/api/api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(protected apiService: ApiService) { }

  currentQuestion$(): Observable<Question> {
    return this.apiService.get("current-question");
  }

  questions$(): Observable<Question[]>{
    return this.apiService.get("user/question");
  }
}
