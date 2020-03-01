import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easite';


  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {}
  
}
