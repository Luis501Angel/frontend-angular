import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {EmployeesDataService} from './employees/services/employees.data.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentsComponent } from './departments/components/departments/departments.component';
import { EmployeesComponent } from './employees/components/employees/employees.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
