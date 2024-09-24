import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{
  slides = [
    {
      image: 'https://cdn.simplycodes.com/web/images/categories/l2/786.jpg',
      caption: 'Slide 1'
    },
    {
      image: 'https://cdn.simplycodes.com/web/images/categories/l2/1166.png',
      caption: 'Slide 2'
    },
    {
      image: 'https://cdn.simplycodes.com/merchant-featured-image/5487190-featured.jpg',
      caption: 'Slide 3'
    }
  ];

  // timer = null;
  selected = 0;
  showNavigation = true;

  @HostListener("window:resize", ["$event"]) onWindowResize() {
    this.showNavigation = window.innerWidth >= 960;
  }

  @HostListener('swipeleft', ['$event']) onSwipeLeft(event: Event) {
    console.log(event);
    this.nextSlide();
  }

  @HostListener('swiperight', ['$event']) onSwipeRight(event: Event) {
    console.log(event);
    this.previousSlide();
  }

  // AutoPlay() {
  //   if(this.timer) {
  //     clearInterval(this.timer);
  //     this.timer = null;
  //   }
  //   else this.timer = setInterval(() => {
  //     this.nextImage();
  //   }, 2000);
  // }

  ngOnInit() {
    console.log(this.showNavigation)
    // this.AutoPlay()
  }


  // ngOnDestroy(): void {
  //   if(this.timer) clearInterval(this.timer);
  // }

  nextSlide() {
    this.selected = (this.selected + 1) % this.slides.length;
  }

  previousSlide() {
    this.selected = (this.selected - 1 + this.slides.length) % this.slides.length;
  }

  goToIndex(index: number) {
    this.selected = index;
  }

  onKeyUp(slid: object) {
    console.log(slid)
  }
}
