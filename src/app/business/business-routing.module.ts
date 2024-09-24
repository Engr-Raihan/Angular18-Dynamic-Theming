import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CouponListComponent} from "./components/coupon-list/coupon-list.component";
import {CouponDetailComponent} from "./components/coupon-detail/coupon-detail.component";
import {CouponStoreComponent} from "./components/coupon-store/coupon-store.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/coupons',
    pathMatch: "full"
  },
  {
    path: 'coupons',
    component: CouponListComponent
  },
  {
    path: 'coupon/:id',
    component: CouponDetailComponent
  },
  {
    path: 'store/:id',
    component: CouponStoreComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '/coupons',
  //   pathMatch: "full"
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
