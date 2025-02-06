import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogsComponent } from './blogs/blogs.component';

@Component({
  selector: 'app-root',
  imports: [BlogsComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website-frontend';
}