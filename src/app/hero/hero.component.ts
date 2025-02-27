import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-hero',
  imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselControlComponent, RouterLink, CarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://www.bjw.de/wp-content/uploads/2015/01/2826_01-1500x1000.jpg'
    };
    this.slides[1] = {
      src: 'https://bg.schorndorf.de/dateien/website/Fotos/2020-2021/BGSonnenuntergang.jpg'
    };
    this.slides[2] = {
      src: 'https://www.bjw.de/wp-content/uploads/2015/01/2826_19-1500x1000.jpg'
    };
  }
}