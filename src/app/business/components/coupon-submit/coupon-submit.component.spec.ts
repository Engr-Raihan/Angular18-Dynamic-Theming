import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponSubmitComponent } from './coupon-submit.component';

describe('CouponSubmitComponent', () => {
  let component: CouponSubmitComponent;
  let fixture: ComponentFixture<CouponSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
