import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponDetailComponent } from './coupon-detail.component';

describe('CouponDetailComponent', () => {
  let component: CouponDetailComponent;
  let fixture: ComponentFixture<CouponDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
