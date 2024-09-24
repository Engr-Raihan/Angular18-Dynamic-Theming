import { NgModule } from '@angular/core';
import { BusinessRoutingModule } from './business-routing.module';
import {CouponListComponent} from "./components/coupon-list/coupon-list.component";
import {CouponDetailComponent} from "./components/coupon-detail/coupon-detail.component";
import {PlatformModule} from "../platform/platform.module";
import {NgOptimizedImage} from "@angular/common";
import {CouponFeedbackComponent} from "./components/coupon-feedback/coupon-feedback.component";
import {CouponSubmitComponent} from "./components/coupon-submit/coupon-submit.component";
import {CouponCardComponent} from "./components/coupon-card/coupon-card.component";
import {CouponStoreComponent} from "./components/coupon-store/coupon-store.component";


@NgModule({
  declarations: [
    CouponListComponent,
    CouponCardComponent,
    CouponStoreComponent,
    CouponDetailComponent,
    CouponSubmitComponent,
    CouponFeedbackComponent,
  ],
  imports: [
    PlatformModule,
    BusinessRoutingModule,
    NgOptimizedImage
  ]
})
export class BusinessModule { }
