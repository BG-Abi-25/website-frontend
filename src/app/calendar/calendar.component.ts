import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule, MatIconModule]
})
export class CalendarComponent implements OnInit {
  events: { date: Date, title: string, description: string, time: string }[] = [
    { date: new Date('2025-02-21'), title: 'Elternsprechtag', description: 'Eltern können sich mit den Lehrern austauschen.', time: 'Ganztägig' },
    { date: new Date('2025-03-10'), title: 'Pädagogischer Tag am BG', description: 'Fortbildungstag für das Lehrerkollegium.', time: 'Ganztägig' },
    { date: new Date('2025-04-01'), title: 'Französischer Abend am BG', description: 'Ein Abend mit französischer Kultur und Küche.', time: '19:00 - 20:00 Uhr' }
  ];
 
 
  

  constructor() {}

  ngOnInit() {}
}
