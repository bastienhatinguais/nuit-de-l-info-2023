import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { catchError, finalize, throwError } from 'rxjs';

export const UnauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return next(req).pipe(catchError(err => {
    if ([0, 401, 403].includes(err.status) && !req.url.includes("logout")) {
      authService.logout$().pipe(finalize(() => router.navigateByUrl("/login"))).subscribe();
    }
    const error = err.error?.message || err.statusText;
    return throwError(() => error);
  }));
};
