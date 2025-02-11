import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventService } from './event.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        NavbarComponent,
        BlogsComponent,
        CalendarComponent,
        AppComponent
      ],
      providers: [EventService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'website-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('website-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('website-frontend app is running!');
  });

  it('should have three initial events', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const events = component.events;
    expect(events.length).toBe(3);
    expect(events[0].title).toBe('Elternsprechtag');
    expect(events[1].title).toBe('Pädagogischer Tag am BG');
    expect(events[2].title).toBe('Französischer Abend am BG');
  });
});
