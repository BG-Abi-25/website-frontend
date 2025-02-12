import { Component } from '@angular/core';
import { BlogsComponent } from "../blogs/blogs.component";
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'app-startpage',
  imports: [BlogsComponent, CalendarComponent],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css'
})
export class StartpageComponent {

}
