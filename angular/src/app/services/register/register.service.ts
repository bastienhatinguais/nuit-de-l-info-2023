import { Injectable } from '@angular/core';
import { TokenResponse } from '@models/token-reponse.model';
import { ApiService } from '@services/api/api.service';
import { Observable, concatMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apiService: ApiService) { }

  public register$(name: string, email: string, password: string, password_confirmation: string): Observable<any> {
    return this.apiService.post<TokenResponse>('register', { name, email, password, password_confirmation }).pipe(
      tap((response: TokenResponse) => {
        localStorage.setItem('token', response.access_token);
      }),
    );

  }
}
