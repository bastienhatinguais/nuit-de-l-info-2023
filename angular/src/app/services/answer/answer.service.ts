import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '@models/answer.model';
import { ApiService } from '@services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(protected apiService: ApiService) { }

  currentAnswer$(index : number): Observable<Answer> {

    return this.apiService.get("answer-current-question/" + index);
  }
}
