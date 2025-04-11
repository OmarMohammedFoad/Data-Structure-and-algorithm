import { Component } from '@angular/core';

@Component({
  selector: 'app-view-images',
  imports: [],
  templateUrl: './view-images.component.html',
  styleUrl: './view-images.component.css',
})
export class ViewImagesComponent {
  arrSrcs: string[] = ['./dog.jpeg', './download.jpeg', './elephant.jpeg'];

  intervalId: any;

  imgSrc: string = this.arrSrcs[0];
  count: number = 0;

  next() {
    this.count++;
    if (this.count >= this.arrSrcs.length) {
      this.count = 0;
    }
    this.imgSrc = this.arrSrcs[this.count];
  }

  prev() {
    console.log(this.count);

    this.count--;
    if (this.count < 0) {
      this.count = this.arrSrcs.length - 1;
    }
    this.imgSrc = this.arrSrcs[this.count];
  }

  play() {
    this.intervalId = setInterval(() => {
      this.imgSrc = this.arrSrcs[this.count];
      this.count++;
      if (this.count >= this.arrSrcs.length) {
        this.count = 0;
      }
    }, 2000);
  }

  stop() {
    this.imgSrc = this.arrSrcs[this.count];
    this.count = 0;
    clearInterval(this.intervalId)
  }
}
