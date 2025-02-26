import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  images: string[] = [
    'https://www.bjw.de/wp-content/uploads/2015/01/2826_01-1500x1000.jpg',
    'https://bg.schorndorf.de/dateien/website/Fotos/2020-2021/BGSonnenuntergang.jpg',
    'https://www.bjw.de/wp-content/uploads/2015/01/2826_19-1500x1000.jpg'
  ];
  currentIndex: number = 0;
  progressBarWidth: number = 0;
  interval: any;

  constructor() {
    this.startProgress();
  }

  startProgress() {
    this.resetProgress();
    this.interval = setInterval(() => {
      if (this.progressBarWidth < 100) {
        this.progressBarWidth += 2;
      } else {
        this.nextImage();
      }
    }, 100); // (100/2)*100=5000ms=5sec
  }

  resetProgress() {
    this.progressBarWidth = 0;
  }

  nextImage() {
    this.resetProgress();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.startProgress();
  }

  prevImage() {
    this.resetProgress();
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.startProgress();
  }
}
