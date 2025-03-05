import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userRole: string = 'user';

  constructor() {}
  getUserRole() {
    return this.userRole;
  }
}
