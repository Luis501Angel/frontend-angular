import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DepartmentDataService } from '../../services/department.data.service';
import {Department} from '../../models/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: any;
  department: Department;
  titleCard: string;
  activeCreate: boolean;
  activeEdit: boolean;

  constructor(private departmentService: DepartmentDataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activeCreate = true;
    this.activeEdit = false;
    this.titleCard = 'Agregar departamento';
    this.department = new Department();
    this.getDepartments();
  }

  createDepartment() {
    this.departmentService.create(this.department).subscribe(res => {
      if (res) {
        this.toastr.success('Agregado exitosamente', 'Departamento');
        this.getDepartments();
        this.department = new Department();
      }
    });
  }

  getDepartments() {
    this.departmentService.getAll().subscribe(res => {
      this.departments = res;
    });
  }

  getDepartment(id) {
    this.departmentService.get(id).subscribe(res => {
      if (res) {
        this.department = res;
      }
    });
  }

  activeEditDepartment(id) {
    this.titleCard = 'Actualizar departamento';
    this.activeEdit = true;
    this.activeCreate = false;
    this.getDepartment(id);
  }

  updateDepartment() {
    this.departmentService.update(this.department).subscribe(res => {
      if (res) {
        this.toastr.success('Actualizado exitosamente', 'Departamento');
        this.titleCard = 'Agregar departamento';
        this.activeCreate = true;
        this.activeEdit = false;
        this.department = new Department();
        this.getDepartments();
      }
    });
  }

  deleteDepartment(id) {
    this.departmentService.delete(id).subscribe(res => {
      if (res) {
        this.toastr.success('Eliminado exitosamente', 'Departamento');
        this.getDepartments();
      }
    });
  }
}
