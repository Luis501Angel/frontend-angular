import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../services/user.data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private userService: UserDataService) { }

  ngOnInit(): void {
  }

  login(username, password) {
  }

}
