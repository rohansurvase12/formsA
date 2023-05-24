import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataShare } from 'src/app/share';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerObj : any = {
    username : '',
    email : '',
    pass : ''
  }
    constructor(private router: Router , private data : DataShare){}
  registerUsers :  any[] = [];

  Register(){
    console.log(this.registerObj.username);
    console.log(this.registerObj.email);
    console.log(this.registerObj.pass);

     this.data.setData(this.registerObj.username, this.registerObj.email);

    this.registerUsers.push(this.registerObj);
    localStorage.setItem('register' , JSON.stringify(this.registerUsers));
    this.registerObj = {
      username : '',
      email : '',
      pass : ''
    }
    this.router.navigate(['home']);
  }
}
