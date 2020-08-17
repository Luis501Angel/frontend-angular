import {Department} from '../../departments/models/department';

export class Employee {
  idEmployee: bigint;
  nameEmployee: string;
  addressEmployee: string;
  phoneEmployee: string;
  department: Department;
}
