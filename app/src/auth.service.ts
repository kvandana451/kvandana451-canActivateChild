import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userRole: string = 'user'; //fallback

  constructor(private router: Router) {}
  getUserRole() {
    return localStorage.getItem('role')
      ? localStorage.getItem('role')
      : this.userRole;
  }
  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
