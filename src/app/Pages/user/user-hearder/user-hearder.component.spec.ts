import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHearderComponent } from './user-hearder.component';

describe('UserHearderComponent', () => {
  let component: UserHearderComponent;
  let fixture: ComponentFixture<UserHearderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHearderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHearderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
