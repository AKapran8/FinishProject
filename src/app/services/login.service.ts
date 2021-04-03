import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  value: string;

  userNameSubject = new BehaviorSubject<string>(null);

  constructor() { }

  newUserStatus() {
    this.value = localStorage.getItem('user');
    this.userNameSubject.next(this.value);
    // if (value) {
    //   let newValue = 'sign up';

    //   newValue = value;

    //   return newValue;

    // }
  }
}
