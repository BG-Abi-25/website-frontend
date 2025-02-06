import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  events = [
    { date: new Date(2025, 3, 4), title: 'Abitur Chemie' },
    { date: new Date(2025, 3, 7), title: 'Schriftliches Abitur Informationstechnik' },
    { date: new Date(2025, 3, 9), title: 'Schriftliches Abitur Mathematik' }
  ];
}
