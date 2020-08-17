import { Component, OnInit } from '@angular/core';

import { DepartmentDataService } from '../departments/services/department.data.service';
import { EmployeesDataService } from '../employees/services/employees.data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private departmentService: DepartmentDataService, private employeeService: EmployeesDataService) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployees();
  }

  getDepartments() {
    this.departmentService.getAll().subscribe(res => {
      console.log(res);
    });
  }

  getEmployees() {
  this.employeeService.getAll().subscribe(res => {
    console.log(res);
  });
  }

}
