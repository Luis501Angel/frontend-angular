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

  getEmployee(id) {
    this.employeeService.get(id).subscribe( res => {
      if (res) {
        this.employee = res;
      }
    });
  }

  createEmployee() {
    this.employeeService.create(this.employee).subscribe(res => {
      if (res) {
        this.toastr.success( 'Agregado exitosamente', 'Empleado');
        this.getEmployees();
        this.employee = new Employee();
      }
    });
  }

  activeEditEmployee(id) {
    this.titleCard = 'Actualizar empleado';
    this.activeEdit = true;
    this.activeCreate = false;
    this.getEmployee(id);
  }

  updateEmployee() {
    this.employeeService.update(this.employee).subscribe( res => {
      if (res) {
        this.toastr.success('Actualizado exitosamente', 'Empleado');
        this.titleCard = 'Agregar empleado';
        this.activeCreate = true;
        this.activeEdit = false;
        this.employee = new Employee();
        this.getEmployees();
      }
    });
  }

  delteEmployee(id) {
    this.employeeService.delete(id).subscribe(res => {
        if (res) {
        this.toastr.success( 'Eliminado exitosamente', 'Empleado');
        this.getEmployees();
      }
    });
  }
}
