import { Component } from '@angular/core';

@Component({
  selector: 'app-platform-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  // loading = false;
  showing = false;

  onClose() {
    this.showing = !this.showing;
  }

  // onSubmit() {
    // if(this.config.NextFunction){
    //   this.loading = true;
    //   this.subs.list = this.config.NextFunction().subscribe(data => {
    //     data ? this.submit.emit(data) : this.submit.emit(true);
    //     this.loading = false;
    //   })
    // }
    // else this.submit.emit(this.config.FilterForm.value);
    // if(this.showing) this.onClose();
  // }

  // onReset() {
    // this.submit.emit(false);
  // }

  stores = [
    {
      "id": 55261,
      "name": "FIGS",
      "urlSlug": "wearfigs.com",
      "displayUrl": "wearfigs.com",
      "logo": "https://cdn.simplycodes.com/images/logo/wearfigscom.jpg",
      "numGreenCodes": 84,
      "featuredImage": "https://images.simplycodes.com/merchant-featured-image/55261-featured.jpg",
      "bestCode": {
        "pk": 68116848,
        "title": "15% Off Storewide at FIGS",
        "code": "FIONAMFIRSTFIGS",
        "slug": "-sc-25-off-storewide-at-figs",
        "percentOff": 15,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 170,
        "users": null
      },
      "l1Category": {
        "parent_id": 1466,
        "parent_name": "Apparel",
        "parent_depth": 1,
        "parent_slug": "fashion"
      },
      "users": null
    },
    {
      "id": 5727,
      "name": "SHEIN",
      "urlSlug": "us.shein.com",
      "displayUrl": "us.shein.com",
      "logo": "https://cdn.simplycodes.com/images/logo/sheincom.jpg",
      "numGreenCodes": 63,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/5727-featured.png",
      "bestCode": {
        "pk": 68307712,
        "title": "15% Off Storewide (Members Only) at SHEIN",
        "code": "renata01",
        "slug": "-sc-15-off-storewide-members-only-at-shein7890e",
        "percentOff": 15,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 112,
        "users": null
      },
      "l1Category": {
        "parent_id": 1466,
        "parent_name": "Apparel",
        "parent_depth": 1,
        "parent_slug": "fashion"
      },
      "users": null
    },
    {
      "id": 8686,
      "name": "Etsy",
      "urlSlug": "etsy.com",
      "displayUrl": "etsy.com",
      "logo": "https://cdn.simplycodes.com/images/logo/etsycom.jpg",
      "numGreenCodes": 36,
      "featuredImage": "https://images.simplycodes.com/merchant-featured-image/8686-featured.png",
      "bestCode": {
        "pk": 69249757,
        "title": "10% Off Storewide at Etsy",
        "code": "THEAEMZ10",
        "slug": "-sc-10-off-storewide-at-etsy77c9a",
        "percentOff": 10,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 282,
        "users": null
      },
      "l1Category": {
        "parent_id": 736,
        "parent_name": "Entertainment",
        "parent_depth": 1,
        "parent_slug": "online"
      },
      "users": null
    },
    {
      "id": 3154,
      "name": "Walgreens",
      "urlSlug": "walgreens.com",
      "displayUrl": "walgreens.com",
      "logo": "https://cdn.simplycodes.com/images/logo/walgreenscom.jpg",
      "numGreenCodes": 25,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/3154-featured.jpg",
      "bestCode": {
        "pk": 64151845,
        "title": "25% Off Storewide (Minimum Order: $20) Members Only at Walgreens",
        "code": "WELCOME25",
        "slug": "-ds-save-25-off-on-orders-over-20cem",
        "percentOff": 25,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 194,
        "users": null
      },
      "l1Category": {
        "parent_id": 1510,
        "parent_name": "Health",
        "parent_depth": 1,
        "parent_slug": "health"
      },
      "users": null
    },
    {
      "id": 757,
      "name": "Harbor Freight",
      "urlSlug": "harborfreight.com",
      "displayUrl": "harborfreight.com",
      "logo": "https://cdn.simplycodes.com/images/logo/harborfreightcom.jpg",
      "numGreenCodes": 23,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/757-featured.png",
      "bestCode": {
        "pk": 71424114,
        "title": "82% Off Select Items at Harbor Freight",
        "code": "82",
        "slug": "-sc-82-off-select-items-at-harbor-freight-qv3j6L3bwnKy8jJRo",
        "percentOff": 82,
        "amountOff": 0,
        "isStorewide": false,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 1,
        "users": null
      },
      "l1Category": {
        "parent_id": 343,
        "parent_name": "Home & Garden",
        "parent_depth": 1,
        "parent_slug": "home-garden"
      },
      "users": null
    },
    {
      "id": 658,
      "name": "Vistaprint",
      "urlSlug": "vistaprint.com",
      "displayUrl": "vistaprint.com",
      "logo": "https://cdn.simplycodes.com/images/logo/vistaprintcom.jpg",
      "numGreenCodes": 20,
      "featuredImage": "https://images.simplycodes.com/merchant-featured-image/658-featured.png",
      "bestCode": {
        "pk": 603009,
        "title": "$22 Off Storewide (Members Only) at Vistaprint",
        "code": "WELCOME15",
        "slug": "-ds-save-15-off-your-next-order-at-vistaprint-single-use-c",
        "percentOff": 0,
        "amountOff": 22,
        "isStorewide": true,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 179,
        "users": [
          {
            "username": "ErenJaeger",
            "image": "https://cdn.simplycodes.com/uploads/users/Eren-Jaeger86853.jpg"
          },
          {
            "username": "marcocardona629",
            "image": "https://cdn.simplycodes.com/uploads/user-avatars/user-avatar-1068-1679156697502.webp"
          }
        ]
      },
      "l1Category": {
        "parent_id": 1550,
        "parent_name": "Software",
        "parent_depth": 1,
        "parent_slug": "software"
      },
      "users": [
        {
          "username": "ErenJaeger",
          "image": "https://cdn.simplycodes.com/uploads/users/Eren-Jaeger86853.jpg"
        },
        {
          "username": "marcocardona629",
          "image": "https://cdn.simplycodes.com/uploads/user-avatars/user-avatar-1068-1679156697502.webp"
        }
      ]
    },
    {
      "id": 31856996,
      "name": "Temu",
      "urlSlug": "temu.com",
      "displayUrl": "temu.com",
      "logo": "https://cdn.simplycodes.com/images/logo/temu.jpg",
      "numGreenCodes": 20,
      "featuredImage": "https://cdn.simplycodes.com/web/images/categories/l2/736.png",
      "bestCode": {
        "pk": 68442697,
        "title": "30% Off On Orders Over 19 (Minimum Order: $19) Mobile App Only at Temu",
        "code": "FAV75424",
        "slug": "-sc-30-off-storewide-new-customers-only-must-download-app-at-temu",
        "percentOff": 30,
        "amountOff": 0,
        "isStorewide": false,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 1366,
        "users": null
      },
      "l1Category": {
        "parent_id": 736,
        "parent_name": "Entertainment",
        "parent_depth": 1,
        "parent_slug": "online"
      },
      "users": null
    },
    {
      "id": 9599,
      "name": "Edible Arrangements",
      "urlSlug": "ediblearrangements.com",
      "displayUrl": "ediblearrangements.com",
      "logo": "https://cdn.simplycodes.com/images/logo/ediblearrangements.jpg",
      "numGreenCodes": 18,
      "featuredImage": "https://images.simplycodes.com/merchant-featured-image/9599-featured.png",
      "bestCode": {
        "pk": 68095287,
        "title": "25% Off Summertime Birthday Frui at Edible Arrangements",
        "code": "SWEETDEAL25",
        "slug": "-sc-25-off-select-products-at-edible-arrangements",
        "percentOff": 25,
        "amountOff": 0,
        "isStorewide": false,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 52,
        "users": null
      },
      "l1Category": {
        "parent_id": 1235,
        "parent_name": "Hobbies & Toys",
        "parent_depth": 1,
        "parent_slug": "hobbies-toys"
      },
      "users": null
    },
    {
      "id": 39218,
      "name": "Instacart",
      "urlSlug": "instacart.com",
      "displayUrl": "instacart.com",
      "logo": "https://cdn.simplycodes.com/images/logo/instacartcom.jpg",
      "numGreenCodes": 16,
      "featuredImage": "https://cdn.simplycodes.com/web/images/categories/l2/1328.jpg",
      "bestCode": {
        "pk": 65044701,
        "title": "$15 Off Storewide (Minimum Order: $50) at Instacart",
        "code": "WELCOME15",
        "slug": "-sc-15-off-storewide-minimum-order-100-at-instacart53201",
        "percentOff": 0,
        "amountOff": 15,
        "isStorewide": true,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 152,
        "users": [
          {
            "username": "julianm",
            "image": "https://cdn.simplycodes.com/uploads/users/julianm78115.jpg"
          }
        ]
      },
      "l1Category": {
        "parent_id": 1328,
        "parent_name": "Food & Restaurants",
        "parent_depth": 1,
        "parent_slug": "food-restaurants"
      },
      "users": [
        {
          "username": "julianm",
          "image": "https://cdn.simplycodes.com/uploads/users/julianm78115.jpg"
        }
      ]
    },
    {
      "id": 5198,
      "name": "JCPenney",
      "urlSlug": "jcpenney.com",
      "displayUrl": "jcpenney.com",
      "logo": "https://cdn.simplycodes.com/images/logo/jcpenneycom.jpg",
      "numGreenCodes": 16,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/5198-featured.jpg",
      "bestCode": {
        "pk": 305625,
        "title": "15% Off Storewide (Minimum Order: $55) Use Vpn To Access The Page at JCPenney",
        "code": "AFFSHOP1",
        "slug": "15-off-your-order-exclusions-apply-4120",
        "percentOff": 15,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "isFreebie": false,
        "numWorked": 113,
        "users": null
      },
      "l1Category": {
        "parent_id": 1466,
        "parent_name": "Apparel",
        "parent_depth": 1,
        "parent_slug": "fashion"
      },
      "users": null
    }
  ];
  coupons = [
    {
      "id": 31991837,
      "name": "Wander Prints",
      "urlSlug": "wanderprints.com",
      "displayUrl": "wanderprints.com",
      "logo": "https://cdn.simplycodes.com/images/logo/wanderprints.jpg",
      "numGreenCodes": 4,
      "featuredImage": null,
      "bestCode": {
        "pk": 71418803,
        "title": "10% Off Storewide at Wander Prints",
        "code": "SA10794KN2MT",
        "slug": "-sc-10-off-storewide-at-wander-prints-M79YR3Z4gvxdxmpDB",
        "percentOff": 10,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 0,
        "numWorked": 2
      },
      "l1Category": {
        "parent_id": 1235,
        "parent_name": "Hobbies & Toys",
        "parent_depth": 1,
        "parent_slug": "hobbies-toys"
      },
      "users": null
    },
    {
      "id": 31991302,
      "name": "FODZYME",
      "urlSlug": "fodzyme.com",
      "displayUrl": "fodzyme.com",
      "logo": "https://cdn.simplycodes.com/images/logo/fodzyme.jpg",
      "numGreenCodes": 3,
      "featuredImage": null,
      "bestCode": {
        "pk": 71417065,
        "title": "10% Off Storewide at FODZYME",
        "code": "SAVE10",
        "slug": "-sc-10-off-storewide-at-fodzyme-GgyyCKrnHcDMr3MJx",
        "percentOff": 10,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 0,
        "numWorked": 1
      },
      "l1Category": {
        "parent_id": 1510,
        "parent_name": "Health",
        "parent_depth": 1,
        "parent_slug": "health"
      },
      "users": null
    },
    {
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
    },
    {
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
    },
    {
      "id": 5487190,
      "name": "Time",
      "urlSlug": "time.com",
      "displayUrl": "time.com",
      "logo": "https://cdn.simplycodes.com/images/logo/shoptimecom.jpg",
      "numGreenCodes": 2,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/5487190-featured.jpg",
      "bestCode": {
        "pk": 71407638,
        "title": "50% Off Storewide at Time",
        "code": "Get50%OFF",
        "slug": "-sc-50-off-storewide-at-time-uyNQwkM0XLC8JcYZR",
        "percentOff": 50,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 2,
        "numWorked": 3
      },
      "l1Category": {
        "parent_id": 736,
        "parent_name": "Entertainment",
        "parent_depth": 1,
        "parent_slug": "online"
      },
      "users": null
    },
    {
      "id": 31971800,
      "name": "Lovisa US",
      "urlSlug": "lovisa.com",
      "displayUrl": "lovisa.com",
      "logo": "https://cdn.simplycodes.com/images/logo/lovisaus.jpg",
      "numGreenCodes": 8,
      "featuredImage": null,
      "bestCode": {
        "pk": 71413121,
        "title": "50% Off Storewide at Lovisa US",
        "code": "UNLOCK50%OFF",
        "slug": "-sc-50-off-storewide-at-lovisa-us-Tzx2rKviIrt47ON6r",
        "percentOff": 50,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 0,
        "numWorked": 2
      },
      "l1Category": {
        "parent_id": 1466,
        "parent_name": "Apparel",
        "parent_depth": 1,
        "parent_slug": "fashion"
      },
      "users": null
    },
    {
      "id": 15657,
      "name": "Reyn Spooner",
      "urlSlug": "reynspooner.com",
      "displayUrl": "reynspooner.com",
      "logo": "https://cdn.simplycodes.com/images/logo/reynspoonercom.jpg",
      "numGreenCodes": 3,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/15657-featured.jpg",
      "bestCode": {
        "pk": 71408615,
        "title": "50% Off Storewide at Reyn Spooner",
        "code": "SUNSET",
        "slug": "-sc-50-off-storewide-at-reyn-spooner-Nr82Gv4NFD5ie8QpA",
        "percentOff": 50,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 1,
        "numWorked": 1
      },
      "l1Category": {
        "parent_id": 1466,
        "parent_name": "Apparel",
        "parent_depth": 1,
        "parent_slug": "fashion"
      },
      "users": null
    },
    {
      "id": 3712,
      "name": "Super ATV",
      "urlSlug": "superatv.com",
      "displayUrl": "superatv.com",
      "logo": "https://cdn.simplycodes.com/images/logo/superatvcom.jpg",
      "numGreenCodes": 4,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/3712-featured.png",
      "bestCode": {
        "pk": 71428540,
        "title": "25% Off Storewide at Super ATV",
        "code": "10DR6QBB40",
        "slug": "-sc-25-off-storewide-at-super-atv-1D9wIIGrFugV722Yz",
        "percentOff": 25,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 0,
        "numWorked": 1
      },
      "l1Category": {
        "parent_id": 661,
        "parent_name": "Automotive",
        "parent_depth": 1,
        "parent_slug": "automotive"
      },
      "users": null
    },
    {
      "id": 31673706,
      "name": "TB12",
      "urlSlug": "tb12sports.com",
      "displayUrl": "tb12sports.com",
      "logo": "https://cdn.simplycodes.com/images/logo/tb12.jpg",
      "numGreenCodes": 9,
      "featuredImage": "https://cdn.simplycodes.com/merchant-featured-image/31673706-featured.jpg",
      "bestCode": {
        "pk": 71413380,
        "title": "30% Off Storewide at TB12",
        "code": "SUBSCRIB",
        "slug": "-sc-30-off-storewide-at-tb12-1V4P14LR0VWe0QkOu",
        "percentOff": 30,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 3,
        "numWorked": 1
      },
      "l1Category": {
        "parent_id": 1510,
        "parent_name": "Health",
        "parent_depth": 1,
        "parent_slug": "health"
      },
      "users": null
    },
    {
      "id": 5485627,
      "name": "Spectrum Brands",
      "urlSlug": "spectrumbrands.com",
      "displayUrl": "spectrumbrands.com",
      "logo": "https://cdn.simplycodes.com/images/logo/spectrumbrandscom.jpg",
      "numGreenCodes": 1,
      "featuredImage": "https://cdn.simplycodes.com/web/images/categories/l2/807.jpg",
      "bestCode": {
        "pk": 71296943,
        "title": "25% Off Storewide at Spectrum Brands",
        "code": "PRIMEFD",
        "slug": "-sc-25-off-storewide-at-spectrum-brands-4LvnmquCTleRJfLav",
        "percentOff": 25,
        "amountOff": 0,
        "isStorewide": true,
        "isFreeshipping": false,
        "numUses": 4,
        "numWorked": 2
      },
      "l1Category": {
        "parent_id": 343,
        "parent_name": "Home & Garden",
        "parent_depth": 1,
        "parent_slug": "home-garden"
      },
      "users": null
    },
  ];
}
