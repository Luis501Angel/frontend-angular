import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
import {ToastrService} from 'ngx-toastr';
import {EmployeesDataService} from '../../services/employees.data.service';
import {Department} from '../../../departments/models/department';
import {DepartmentDataService} from '../../../departments/services/department.data.service';

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
  department: Department;
  departments: any;
  idDepartment: bigint;

  constructor(private employeeService: EmployeesDataService,
              private toastr: ToastrService,
              private departmentService: DepartmentDataService) { }

  ngOnInit(): void {
    this.getDepartments();
    this.activeCreate = true;
    this.activeEdit = false;
    this.titleCard = 'Agregar Empleado';
    this.employee = new Employee();
    this.getEmployees();
  }

  getDepartments() {
    this.departmentService.getAll().subscribe(res => {
      this.departments = res;
    });
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
    this.employee.department = Number(this.idDepartment);
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

  deleteEmployee(id) {
    this.employeeService.delete(id).subscribe(res => {
        if (res) {
        this.toastr.success( 'Eliminado exitosamente', 'Empleado');
        this.getEmployees();
      }
    });
  }
}
