import { Component } from "@angular/core";
import { RegisterUser } from "../models/register-user";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    ){
    this.loggedInUser = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  loggedInUser: RegisterUser;
}