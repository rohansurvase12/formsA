import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './mycompo/login/login.component';
import { RegisterComponent } from './mycompo/register/register.component';
import { HomeComponent } from './mycompo/home/home.component';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'home' , component : HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
