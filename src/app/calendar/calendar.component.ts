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
  events: { startDate: Date, endDate: Date, title: string, description: string, time: string }[] = [
    { startDate: new Date('2025-02-21'), endDate: new Date('2025-02-21'), title: 'Elternsprechtag', description: 'Eltern können sich mit den Lehrern austauschen.', time: 'Ganztägig' },
    { startDate: new Date('2025-03-10'), endDate: new Date('2025-03-10'), title: 'Pädagogischer Tag am BG', description: 'Fortbildungstag für das Lehrerkollegium.', time: 'Ganztägig' },
    { startDate: new Date('2025-04-01'), endDate: new Date('2025-04-01'), title: 'Französischer Abend am BG', description: 'Ein Abend mit französischer Kultur und Küche.', time: '19:00 - 20:00 Uhr' },
    { startDate: new Date('2025-02-26T09:35:00'), endDate: new Date('2025-02-26T12:55:00'), title: 'Workshops Klassen 10', description: 'Mit Professor Schweiger zum Thema TikTok - Medien und Fake News.', time: '09:35 – 12:55' },
    { startDate: new Date('2025-02-25T19:00:00'), endDate: new Date('2025-02-25T20:00:00'), title: 'Vortrag von Professor Schweiger', description: 'Thema TikTok - Medien und Fake News.', time: '19:00 – 20:00' },
    { startDate: new Date('2025-03-10'), endDate: new Date('2025-03-13'), title: 'Onlineanmeldungen Klassen 5', description: 'MO 10. März - DO 13. März.', time: 'Ganztägig' },
    { startDate: new Date('2025-03-19'), endDate: new Date('2025-03-19'), title: 'Klassenpflegschaften Stufen 7, 8 und 10', description: '', time: 'Ganztägig' },
    { startDate: new Date('2025-04-29'), endDate: new Date('2025-04-29'), title: 'Abitur Deutsch', description: '', time: 'Ganztägig' },
    { startDate: new Date('2025-05-05'), endDate: new Date('2025-05-05'), title: 'Abitur Kunst, Gesellschaftskunde, Geo, Geschichte', description: 'Musik, Religion, Sport, Wirtschaft.', time: 'Ganztägig' },
    { startDate: new Date('2025-05-07'), endDate: new Date('2025-05-07'), title: 'Abitur Englisch', description: '', time: 'Ganztägig' },
    { startDate: new Date('2025-05-08'), endDate: new Date('2025-05-08'), title: 'Abitur Russisch', description: '', time: 'Ganztägig' }
  ];

  constructor() {}

  ngOnInit() {
    this.sortEventsByDate();
  }

  sortEventsByDate(): void {
    this.events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }
}
