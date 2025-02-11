import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: { date: Date, title: string }[] = [
    { date: new Date('2025-02-21'), title: 'Elternsprechtag' },
    { date: new Date('2025-03-10'), title: 'Pädagogischer Tag am BG' },
    { date: new Date('2025-04-01'), title: 'Französischer Abend am BG' }
  ];

  getEvents() {
    return this.events;
  }

  addEvent(date: Date, title: string) {
    this.events.push({ date, title });
  }
}
