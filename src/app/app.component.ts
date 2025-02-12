import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-frontend';
}
