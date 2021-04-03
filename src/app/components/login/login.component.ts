import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  logIn() {
    if (this.password === 'admin' && this.email === 'admin@gmail.com') {
      localStorage.setItem('user', this.password);
      this.loginService.newUserStatus();
    } else {
      alert('Your password is wrong. Please try again');
    }

    this.email = '';
    this.password = '';
  }

}
