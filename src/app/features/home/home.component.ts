import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/theme.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  email: string;
  showMyMessage: boolean;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private themeService: ThemeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.showMyMessage = false;
    console.log(this.showMyMessage);
  }

  subscribeClick() {
    this.themeService.manageEmailList(this.email);
    this.email = "";
    this.showMyMessage = true;
    console.log(this.showMyMessage);
  }  
  showMyMessageFunction(){
    this.showMyMessage = !this.showMyMessage;
    console.log(this.showMyMessage);
  }

}
