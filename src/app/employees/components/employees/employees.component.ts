import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {ToastrService} from 'ngx-toastr';
import {EmployeesDataService} from '../../services/employees.data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any;
  employee: Employee;
  titleCard: string;
  activeCreate: boolean;
  activeEdit: boolean;

  constructor(private employeeService: EmployeesDataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activeCreate = true;
    this.activeEdit = false;
    this.titleCard = 'Agregar Empleado';
    this.employee = new Employee();
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAll().subscribe(res => {
      this.employees = res;
    });
  }

}
