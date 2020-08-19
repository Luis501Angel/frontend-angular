import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DepartmentsComponent} from './departments/components/departments/departments.component';
import {EmployeesComponent} from './employees/components/employees/employees.component';
import {UserComponent} from './user/components/user/user.component';
import {LoginComponent} from './user/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
