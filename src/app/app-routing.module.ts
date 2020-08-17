import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {DepartmentsComponent} from './departments/components/departments/departments.component';
import {EmployeesComponent} from './employees/components/employees/employees.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
