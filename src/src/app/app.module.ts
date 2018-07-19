import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, Validators } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { AppOptionsComponent } from './app-options/app-options.component';
import { AppRoutingModule }     from './app-routing.module';
import { AlertComponent }  from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/index';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, NgbModule.forRoot(), AngularFontAwesomeModule ],
  declarations: [ AppComponent, LoginComponent, RegisterComponent, AppOptionsComponent, AlertComponent, HomeComponent],
  bootstrap:    [ AppComponent ],
  providers:[ AuthGuard, AlertService, UserService ]
})
export class AppModule { }
