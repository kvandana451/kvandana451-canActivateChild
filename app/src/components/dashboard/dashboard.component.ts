import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
  isAdmin() {
    if (this.authService.getUserRole() === 'admin') {
      return true;
    }
    return false;
  }
  isAdminorManager() {
    if (
      this.authService.getUserRole() === 'admin' ||
      this.authService.getUserRole() === 'manager'
    ) {
      return true;
    }
    return false;
  }
}
