import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppOptionsComponent } from  './app-options/app-options.component';
import { LoginComponent } from  './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { HomeComponent } from  './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'', component: AppOptionsComponent},  
  {path:'login', component: LoginComponent}  ,
  {path:'register', component: RegisterComponent}  ,
  {path:'options', component: AppOptionsComponent}  ,
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}