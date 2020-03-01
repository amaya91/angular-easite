import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; 



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;
  eventName: string;
  newCalendarEvents: string;
  calendarVisible = false;
  modalVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('calendarEvents')!==null){
      this.calendarEvents = JSON.parse(localStorage.getItem('calendarEvents'));
    }
  }
  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  handleDateClick(arg) {

    // this.modalVisible = !this.modalVisible;
    this.eventName = prompt("What is your event name?");
    if (confirm('Would you like to add ' + this.eventName + ' to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ 
        title: this.eventName,
        start: arg.date,
        allDay: arg.allDay
      })
      this.newCalendarEvents = JSON.stringify(this.calendarEvents);
      localStorage.setItem('calendarEvents', this.newCalendarEvents);
      console.log(this.calendarEvents);
    }
  }

  // addEvent() {
  //   this.calendarEvents = this.calendarEvents.concat({ 
  //     { title: 'event 2', date: '2019-04-02' }
  //   });
  // }

  // modifyTitle(eventIndex, newTitle) {
  //   let calendarEvents = this.calendarEvents.slice(); 
  //   let singleEvent = Object.assign({}, calendarEvents[eventIndex]); 
  //   singleEvent.title = newTitle;
  //   calendarEvents[eventIndex] = singleEvent;
  //   this.calendarEvents = calendarEvents; 
  // }

}
