import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponStoreComponent } from './coupon-store.component';

describe('CouponStoreComponent', () => {
  let component: CouponStoreComponent;
  let fixture: ComponentFixture<CouponStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
