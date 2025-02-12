import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BlogsComponent, CalendarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-frontend';
}
