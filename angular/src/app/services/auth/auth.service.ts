import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenResponse } from '@models/token-reponse.model';
import { ApiService } from '@services/api/api.service';
import { UserService } from '@services/user/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, concatMap, finalize, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private router: Router) { }

  // public isAuthenticated: boolean = localStorage.getItem("isLogg²edIn") != null && localStorage.getItem("isLoggedIn") === "true";

  get isAuthenticated() {
    return localStorage.getItem("token") != null;
  }


  public login$(email: string, password: string): Observable<any> {
    return this.apiService.post<TokenResponse>('token', { email, password }).pipe(
      tap((response: TokenResponse) => {
        localStorage.setItem('token', response.access_token);
      }),
    );

  }

  public loginSession$(email: string, password: string): Observable<any> {
    return this.apiService.get('csrf-cookie').pipe(
      concatMap(csrfResponse => {
        return this.apiService.post('login', { email, password }).pipe(
          tap(() => localStorage.setItem('isLoggedIn', 'true')),
        );
      })
    );
  }

  public logout() {
    localStorage.clear();
  }

  public logoutSession$() {
    return this.apiService.post("logout").pipe(
      tap(() => localStorage.clear()),
    );
  }
}
