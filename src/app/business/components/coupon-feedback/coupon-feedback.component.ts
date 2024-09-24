import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-coupon-feedback',
  templateUrl: './coupon-feedback.component.html',
  styleUrl: './coupon-feedback.component.scss'
})
export class CouponFeedbackComponent {
  @Input() coupon: any;
  clicked = false;
}
