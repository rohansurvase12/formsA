import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataShare } from 'src/app/share';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username : string = '';
  email : string = '';

  constructor(private data : DataShare, private router : Router){}
  ngOnInit() : void {
   this.username = this.data.getUserName();
    this.email = this.data.getUseremail();
    console.log('Hello');
    console.log(this.username);
    console.log(this.email);
    }
   logOut(){

    this.router.navigate(['']);

   }
    
}
