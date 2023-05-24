import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/login';
import { DataShare } from 'src/app/share';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // login ! : Login{
  //   u
  // }

  constructor(private router : Router , private data : DataShare ){}
  users : any[] = []
  ngOnInit(): void {
    const local = localStorage.getItem('register');
    if(local != null){
      this.users = JSON.parse(local);
    }
  }

  loginObj : any = {
    username : '',
    pass : ''
  }
  
 Login(){
  console.log("login")
  console.log(this.loginObj.username)
  console.log(this.loginObj.pass)

  const exists = this.users.find(u => u.username == this.loginObj.username && u.pass == this.loginObj.pass);

  if(exists != undefined){
    // alert("Sucessfull");
    this.data.setData(this.loginObj.username, exists.email);
    this.router.navigate(['home']);
  }else{
    alert("Not Sucessfull");
  }
  
 }
}
