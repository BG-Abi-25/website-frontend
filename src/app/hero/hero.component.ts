import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  images: string[] = [
    'https://www.bjw.de/wp-content/uploads/2015/01/2826_01-1500x1000.jpg',
    'https://bg.schorndorf.de/dateien/website/Fotos/2020-2021/BGSonnenuntergang.jpg',
    'https://www.bjw.de/wp-content/uploads/2015/01/2826_19-1500x1000.jpg'
  ];
  currentIndex = 0;
  progressBarWidth = 0;
  interval: any;
  progressInterval: any;

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    clearInterval(this.progressInterval);
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 5000); // Wechselt alle 5 Sekunden

    this.progressInterval = setInterval(() => {
      this.progressBarWidth += 100 / 5; // Progressbar für 5 Sekunden
      if (this.progressBarWidth >= 100) {
        this.progressBarWidth = 0;
      }
    }, 1000); // Fortschrittsbalken wird jede Sekunde aktualisiert
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.progressBarWidth = 0; // Reset der Progressbar
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.progressBarWidth = 0; // Reset der Progressbar
  }
}
