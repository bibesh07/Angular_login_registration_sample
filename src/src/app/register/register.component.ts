import { Component } from "@angular/core";
import { SharedServices } from "../services/shared.service";
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
})

export class RegisterComponent {

  constructor(
    public sharedServices: SharedServices,
    public userService: UserService,
    private router: Router,
    public alertService: AlertService,
    ){}

  model: any = {}
  title: string = 'Register';

  onSubmit():void {
    this.userService.Register(this.model)
    .subscribe(reponse => {
       this.router.navigate(['/login']);
    });
  }
}