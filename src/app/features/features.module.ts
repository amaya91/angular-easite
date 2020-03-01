import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';


import { FormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaComponent } from './media/media.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [HomeComponent, BookComponent, MediaComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FlatpickrModule.forRoot(),
  ]
})
export class FeaturesModule {

  calendarPlugins = [dayGridPlugin];
 }
