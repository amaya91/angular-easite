import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  realPassword = 'assword';
  username: string;
  user1 = 'user1';
  user2 = 'user2';
  showMyAlert: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.showMyAlert = false;
  }

  login() {
    // this.username = '';
    if(this.username === this.user1 && this.password === this.realPassword){
      this.router.navigate(['book']);
      console.log(this.username, this.password);
    } if(this.username === this.user2 && this.password === this.realPassword){
      this.router.navigate(['media']);
      console.log(this.username, this.password);
    }  
    else 
    console.log(this.username, this.password);
    this.username = "";
    this.password = "";
    this.showMyAlert = true;
    
  };

  hideMyAlert() {
    this.showMyAlert = !this.showMyAlert;
  }

}
