import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  newList: string;
  private showBioBoolean: Boolean;

  constructor(
    private router: Router
  ) { }

  manageEmailList(email:string) {
    if(localStorage.getItem('emailList')===null){
      localStorage.setItem('emailList', email);
    } else { 
      this.newList = (localStorage.getItem('emailList')) + ',' + email;
      localStorage.setItem('emailList', this.newList);  
    }
  }

}

