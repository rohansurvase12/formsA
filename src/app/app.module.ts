import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './mycompo/login/login.component';
import { RegisterComponent } from './mycompo/register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './mycompo/home/home.component';
import { DataShare } from './share';
import { NewComponent } from './mycompo/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataShare],
  bootstrap: [AppComponent]
})
export class AppModule { }
