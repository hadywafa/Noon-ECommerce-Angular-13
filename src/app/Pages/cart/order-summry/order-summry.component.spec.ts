import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummryComponent } from './order-summry.component';

describe('OrderSummryComponent', () => {
  let component: OrderSummryComponent;
  let fixture: ComponentFixture<OrderSummryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
