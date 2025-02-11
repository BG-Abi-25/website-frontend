import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  clickCount = 0;
  showImage = false;
  lastClickTime = 0;
  timeLimit = 500; // Zeitlimit für schnelle Klicks in Millisekunden (500ms = 0.5 Sekunden)

  countClicks() {
    const currentTime = new Date().getTime();

    // Wenn der letzte Klick zu lange her ist, zurücksetzen
    if (currentTime - this.lastClickTime > this.timeLimit) {
      this.clickCount = 0;
    }

    this.clickCount++;
    this.lastClickTime = currentTime;

    // Wenn 3 schnelle Klicks erreicht sind
    if (this.clickCount === 3) {
      this.showImage = true;
    }
  }
}
