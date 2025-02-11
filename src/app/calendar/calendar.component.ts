import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule]
})
export class CalendarComponent implements OnInit {
  events: { date: Date, title: string }[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  addEvent(date: Date, title: string) {
    if (date && title) {
      this.eventService.addEvent(date, title);
      this.events = this.eventService.getEvents(); // Aktualisiere die Events-Liste
    }
  }
}
