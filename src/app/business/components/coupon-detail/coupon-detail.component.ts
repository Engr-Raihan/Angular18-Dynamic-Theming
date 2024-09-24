import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrl: './coupon-detail.component.scss'
})
export class CouponDetailComponent implements OnInit{
  ngOnInit(){
    console.log('OnInit')
  }
}
