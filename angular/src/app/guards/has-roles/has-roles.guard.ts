import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { Role } from 'src/app/enums/role.enum';

export const HasRoles = (...roles: Role[]): CanActivateFn => {
  return async (ars: ActivatedRouteSnapshot, rss: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated) {
      if (roles == null || roles.length == 0) {
        return true;
      }

      let userHabilities = [] as string[];
      // const currentUser = await firstValueFrom(userService.currentUser$);
      userHabilities = ['admin'] // Récupérer les habilities du user

      if (roles.every(r => userHabilities.includes(r))) {
        return true;
      }
    }
    router.navigateByUrl("/");
    return false;
  }
};
