import { Component } from '@angular/core';
import { BlogsComponent } from "../blogs/blogs.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-startpage',
  imports: [BlogsComponent, CalendarComponent, HeroComponent],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css'
})
export class StartpageComponent {

}
