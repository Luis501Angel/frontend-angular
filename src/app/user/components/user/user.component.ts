import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../services/user.data.service';
import { ToastrService } from 'ngx-toastr';
import {User} from '../../models/user';
import {Department} from '../../../departments/models/department';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserDataService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  createUser() {
    this.userService.create(this.user).subscribe(res => {
      if (res) {
        this.toastr.success('Creado exitosamente', 'Usuario');
        this.user = new User();
      }
    });
  }

}
