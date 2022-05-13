import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummeryOrderComponent } from './order-summery-order.component';

describe('OrderSummeryOrderComponent', () => {
  let component: OrderSummeryOrderComponent;
  let fixture: ComponentFixture<OrderSummeryOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummeryOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummeryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
