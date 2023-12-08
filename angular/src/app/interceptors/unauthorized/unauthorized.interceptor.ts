import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { catchError, throwError } from 'rxjs';

export const UnauthorizedInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const snackBar = inject(MatSnackBar);
  const router = inject(Router);
  return next(req).pipe(catchError(err => {
    if ([0, 401, 403].includes(err.status) && !req.url.includes("logout")) {
      authService.logout();
      router.navigateByUrl("/login");
    }
    const error = err.error?.message || err.statusText;
    snackBar.open("Une erreur s'est produite. " + error, 'close', { duration: 2000, panelClass: 'errorSnack' });
    return throwError(() => error);
  }));
};
