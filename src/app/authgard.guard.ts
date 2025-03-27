import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if the user is authenticated using localStorage
  const isAuthenticated = localStorage.getItem('username') !== null;

  if (isAuthenticated) {
    return true;
  } else {
    alert("Login first");
    router.navigate(['/login']); // Redirect to login if not authenticated
    return false;
  }
};
