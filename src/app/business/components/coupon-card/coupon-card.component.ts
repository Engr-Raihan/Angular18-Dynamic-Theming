import {Component, Input} from '@angular/core';
import {MainComCard} from "../../../platform/interfaces/platform.interface";

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrl: './coupon-card.component.scss'
})
export class CouponCardComponent {
  @Input() review!: MainComCard;
}
