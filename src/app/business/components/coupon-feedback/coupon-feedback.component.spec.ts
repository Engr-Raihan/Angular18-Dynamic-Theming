import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponFeedbackComponent } from './coupon-feedback.component';

describe('CouponFeedbackComponent', () => {
  let component: CouponFeedbackComponent;
  let fixture: ComponentFixture<CouponFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
