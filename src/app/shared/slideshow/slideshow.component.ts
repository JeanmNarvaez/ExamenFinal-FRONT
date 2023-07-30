import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  images: string[] = [
    'https://images7.alphacoders.com/596/596343.jpg',
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639557.jpg&fm=jpg',
    'https://hips.hearstapps.com/hmg-prod/images/creamy-pasta-burrata-7-1656098638.jpeg?crop=1.00xw:0.502xh;0,0.212xh&resize=1200:*',
    'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-06/steak.jpg'
  ];
  currentImage!: string;

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    let index = 0;
    setInterval(() => {
      this.currentImage = this.images[index];
      index = (index + 1) % this.images.length;
    }, 3000); // Change slide every 3 seconds
  }
}

