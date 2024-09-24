import {ApplicationRef, Component, OnDestroy, OnInit} from '@angular/core';
import {first} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit, OnDestroy {
  reviews = [
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid deserunt, distinctio, eius eum fuga fugit ipsam iste nam non, officiis perferendis possimus quae qui repudiandae suscipit temporibus voluptatem!",
      user: "Ad aliquid"
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores commodi dolor ducimus eligendi, ex facere impedit laborum nam neque pariatur perferendis perspiciatis, quia sit sunt, tempora temporibus ut voluptatibus.",
      user: "Animi"
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim id porro suscipit veritatis! Dolore eos ex, fugit nesciunt non placeat qui rerum unde voluptatem! Ad delectus hic nulla. Cumque.",
      user: "Alias"
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laborum quae! Consectetur consequuntur delectus facere harum impedit ipsum iste laboriosam, minima, molestias necessitatibus praesentium quis rerum tempora tenetur unde vero!",
      user: "Dolores"
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos explicabo hic molestias neque nobis provident quibusdam suscipit unde. Asperiores eius est expedita, ipsa molestiae perferendis porro ratione reiciendis veritatis.",
      user: "Beatae"
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur ex inventore ipsum molestiae porro quo quod reprehenderit sapiente tempore? A accusamus ad consequatur ea esse iste minus obcaecati quam?",
      user: "Accusamus"
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, enim iure laborum modi veritatis? Aliquam aperiam assumenda eius, esse ex expedita, laudantium provident, recusandae repudiandae saepe soluta voluptatum.",
      user: "A ab adipisci"
    }
  ];

  selected = 0;
  // AutoPlay() {
    // if(this.timer) clearInterval(this.timer);
    // else this.timer = window.setInterval(() => {
    //   this.selected = (this.selected + 1) % this.reviews.length;
    // }, 500);


    // timer(0, 1000).subscribe(n => console.log('timer', n));
    // interval(1000).subscribe(n => console.log('interval', n));

    // this.selected = (this.selected + 1) % this.reviews.length;
    // console.log('selected', this.selected);
  // }

  goToIndex(index: number) {
    this.selected = index;
  }

  ngOnDestroy(): void {
    // if(this.timer) clearInterval(this.timer);
    console.log('Destroy')
  }

  constructor(private applicationRef: ApplicationRef) {}

  ngOnInit(): void {
    this.applicationRef.isStable.pipe(first((isStable) => isStable)).subscribe(res => {
      // setInterval(() => this.AutoPlay(), 2000);
      // timer(0, 800).subscribe(() => this.AutoPlay());
      console.log('isStable', res)
    });
  }

  onKeyUp(slid: object) {
    console.log(slid)
  }
}
