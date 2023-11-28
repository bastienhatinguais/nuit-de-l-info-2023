import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user.model';
import { ApiService } from '@services/api/api.service';
import { UserService } from '@services/user/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, concat, concatMap, forkJoin, mergeMap, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private userService: UserService, private cookieService: CookieService, private router: Router) { }

  public isAuthenticated: boolean = localStorage.getItem("isLoggedIn") != null && localStorage.getItem("isLoggedIn") === "true";

  login$(email: string, password: string): Observable<any> {
    return this.apiService.get('csrf-cookie').pipe(
      mergeMap(csrfResponse => {
        return forkJoin([
          of(csrfResponse),
          this.apiService.post('login', { email, password })
        ]);
      }),
      catchError((error: any) => {
        console.error('An error occurred:', error);
        return of(null);
      }),
      tap(() => {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigateByUrl('/admin');
      }
      )
    );
  }

  logout$() {
    return this.apiService.post("logout").pipe(
      tap(() => localStorage.clear()),
      tap(() => this.router.navigateByUrl("/login"))
    );
  }
}
