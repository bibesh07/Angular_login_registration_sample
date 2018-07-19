import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertService } from './alert.service';
import { RegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(public alertService: AlertService) {}

   loggedInUser: RegisterUser = {
     name: 'Bibesh',
     email: 'bibeshkc01@gmail.com',
     dateJoined: new Date(),
     username: 'bibesh07',
     password: 'password',
  };

  Login(email:string, password:string): Observable<any> {
    if( email == 'bibesh@gmail.com' && password == 'password') {
      this.alertService.success('Login Successfull', false);
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
      return of(true);
    } else {
      this.alertService.error('Invalid Login', false);
      localStorage.removeItem('user');
      return of(false);
    }
  }

  Register(User: RegisterUser): Observable<any> {
    this.alertService.success('Register Successfull. You can login with the details as submitted', true);
    return of(true);
  }

   logout():void {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
   }
}