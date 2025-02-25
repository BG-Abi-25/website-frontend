import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  slides = [
    'https://www.bjw.de/wp-content/uploads/2015/01/2826_01-1500x1000.jpg',
    'https://bg.schorndorf.de/dateien/website/Fotos/2020-2021/BGSonnenuntergang.jpg',
    'https://www.bjw.de/wp-content/uploads/2015/01/2826_19-1500x1000.jpg'
  ];
  currentSlide = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.changeSlide(1);
    }, 5000);
  }

  changeSlide(direction: number): void {
    this.currentSlide = (this.currentSlide + direction + this.slides.length) % this.slides.length;
  }

  setSlide(index: number): void {
    this.currentSlide = index;
  }
}
