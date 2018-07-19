import { Component } from "@angular/core";
import { SharedServices } from "../services/shared.service";
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})

export class LoginComponent {

  constructor(
    public sharedServices: SharedServices,
    public userService: UserService,
    public alertService:  AlertService,
    public router: Router,
    ){}

  isLoggedIn: boolean;
  alert: string;
  alertType: string;
  model: any = {}

  onSubmit():void {
    this.userService.Login(this.model.email, this.model.password)
    .subscribe(response => 
    {
      this.isLoggedIn = response;
      if (localStorage.getItem('user')) {
        this.router.navigate(['/home']);
      }
    });
  }
}