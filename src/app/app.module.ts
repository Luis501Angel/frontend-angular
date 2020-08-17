import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EmployeesDataService } from './employees/services/employees.data.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentsComponent } from './departments/components/departments/departments.component';
import { EmployeesComponent } from './employees/components/employees/employees.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/components/user/user.component';
import { LoginComponent } from './user/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentsComponent,
    EmployeesComponent,
    SidebarComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
