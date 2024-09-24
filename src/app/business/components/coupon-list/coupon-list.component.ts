import {Component, HostListener, OnInit} from '@angular/core';
import {MainComCard} from "../../../platform/interfaces/platform.interface";

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.scss'
})
export class CouponListComponent implements OnInit{
  breakpoint = 2;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  @HostListener("window:resize", ["$event"]) onWindowResize() {
    this.breakpoint = (window.innerWidth <= 960) ? 1 : 2;
  }

  // onSelectProduct(item: any) {
  //   this.router.navigate([`coupon/${item._id}`]).then();
  // }

  store_list = [{
    "id": 31678103,
    "name": "Teal Swan",
    "urlSlug": "tealswan.com",
    "displayUrl": "tealswan.com",
    "logo": "https://cdn.simplycodes.com/images/logo/tealswan.jpg",
    "numGreenCodes": 11,
    "featuredImage": "https://cdn.simplycodes.com/web/images/categories/l2/786.jpg",
    "bestCode": {
      "pk": 71420289,
      "title": "75% Off Storewide at Teal Swan",
      "code": "Claim75%offforalimitedtime",
      "slug": "-sc-75-off-storewide-at-teal-swan-p2VEw7vPGcq0bamzb",
      "percentOff": 75,
      "amountOff": 0,
      "isStorewide": true,
      "isFreeshipping": false,
      "numUses": 1,
      "numWorked": 1
    },
    "l1Category": {
      "parent_id": 786,
      "parent_name": "Education",
      "parent_depth": 1,
      "parent_slug": "career-learning"
    },
    "users": null
  }];
  store_list2 = [{
      "id": 31784182,
      "name": "The Hookah Lab",
      "urlSlug": "thehookahlab.com",
      "displayUrl": "thehookahlab.com",
      "logo": "https://cdn.simplycodes.com/images/logo/thehookahlab.jpg",
      "numGreenCodes": 2,
      "featuredImage": "https://cdn.simplycodes.com/web/images/categories/l2/1166.png",
      "bestCode": {
        "pk": 71415309,
        "title": "70% Off Storewide at The Hookah Lab",
        "code": "FLASHSALE",
        "slug": "-sc-70-off-storewide-at-the-hookah-lab-dtp7YreaUbFcrodzG",
        "percentOff": 70,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 2,
        "numWorked": 3
      },
      "l1Category": {
        "parent_id": 1510,
        "parent_name": "Health",
        "parent_depth": 1,
        "parent_slug": "health"
      },
      "users": null
    }];

  card_list: MainComCard[] = [
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci, enim iure laborum modi veritatis? Aliquam aperiam assumenda eius, esse ex expedita, laudantium provident, recusandae repudiandae saepe soluta voluptatum.",
      user: "A ab adipisci",
      image: 'https://cdn.simplycodes.com/images/logo/thehookahlab.jpg',
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laborum quae! Consectetur consequuntur delectus facere harum impedit ipsum iste laboriosam, minima, molestias necessitatibus praesentium quis rerum tempora tenetur unde vero!",
      user: "Dolores",
      image: 'https://cdn.simplycodes.com/images/logo/shoptimecom.jpg',
    },
    {
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid distinctio, eius eum fuga deserunt, distinctio, eius eum fuga fugit ipsam iste nam non, officiis perferendis possimus quae qui repudiandae suscipit temporibus voluptatem!",
      user: "Ad aliquid",
      image: 'https://cdn.simplycodes.com/images/logo/lovisaus.jpg',
    }
  ];
}
