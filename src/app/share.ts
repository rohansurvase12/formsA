import { Injectable } from "@angular/core";

@Injectable()
 export class DataShare{
 username : string = "";
 email : string = '';

 setData(username : string, email : string) : void {
    this.username = username;
    this.email = email;
 }

 getUserName() : string{
    return this.username;
 }

 getUseremail() : string{
    return this.email;
 }
}