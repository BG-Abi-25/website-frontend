import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavbarComponent } from './app/navbar/navbar.component';
import { BlogComponent } from './app/blogs/blog/blog.component';
import { CalendarComponent } from './app/calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    // andere Provider
    { provide: MatDatepickerModule, useValue: {} },
    { provide: MatNativeDateModule, useValue: {} }
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    NavbarComponent,
    BlogComponent,
    CalendarComponent
  ]
}).catch(err => console.error(err));