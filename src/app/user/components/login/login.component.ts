import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../services/user.data.service';
import {environment} from '../../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserDataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
      if (res) {
        if (res.message.toString() === 'El usuario no existe') {
          this.toastr.error( 'El usuario no existe', 'Usuario');
        } else if (res.message.toString() === 'Password incorrecta') {
          this.toastr.error( 'Contraseña incorrecta', 'Usuario');
        } else {
          this.toastr.success( 'Inicio de sesion exitoso', 'Usuario');
          environment.token = res.message;
        }
      }
    });
  }

}
