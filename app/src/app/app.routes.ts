import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UserManagementComponent } from '../components/user-management/user-management.component';
import { ReportsComponent } from '../components/reports/reports.component';
import { NotAuthorisedComponent } from '../components/not-authorised/not-authorised.component';
import { canActivateChildGuard } from '../can-activate-child.guard';
import { LoginComponent } from '../components/login/login.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivateChild: [canActivateChildGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        data: { roles: ['admin', 'user', 'manager'] },
      },
      {
        path: 'users',
        component: UserManagementComponent,
        data: { roles: ['admin'] },
      },
      {
        path: 'reports',
        component: ReportsComponent,
        data: { roles: ['admin', 'manager'] },
      },
    ],
  },
  {
    path: 'not-authorized',
    component: NotAuthorisedComponent,
  },
  // { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
