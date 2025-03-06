import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  selectedRole: string = 'admin';
  constructor(private router: Router) {}
  login() {
    localStorage.setItem('role', this.selectedRole);
    this.router.navigate(['/admin/dashboard']);
  }
}
