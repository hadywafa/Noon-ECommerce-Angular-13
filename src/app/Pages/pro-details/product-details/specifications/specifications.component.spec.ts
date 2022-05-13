import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationsComponent } from './specifications.component';

describe('SpecificationsComponent', () => {
  let component: SpecificationsComponent;
  let fixture: ComponentFixture<SpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
