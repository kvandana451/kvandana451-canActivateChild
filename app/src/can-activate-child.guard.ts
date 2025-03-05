import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const canActivateChildGuard: CanActivateChildFn = (
  childRoute,
  state
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const role = authService.getUserRole();
  const allowedrole = childRoute.data['roles'];
  if (allowedrole.includes(role)) {
    return true;
  }
  router.navigate(['/not-authorized']); // Redirect if unauthorized
  return false;
};
