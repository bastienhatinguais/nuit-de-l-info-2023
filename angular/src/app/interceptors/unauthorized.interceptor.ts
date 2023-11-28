import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { catchError, throwError } from 'rxjs';

export const UnauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  return next(req).pipe(catchError(err => {
    if ([401, 403].includes(err.status) && authService.isAuthenticated && !req.url.includes("logout")) {
      authService.logout$().subscribe(() => {
      });
    }
    const error = err.error?.message || err.statusText;
    return throwError(() => error);
  }));
};
