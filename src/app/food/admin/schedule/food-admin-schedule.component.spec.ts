import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAdminScheduleComponent } from './food-admin-schedule.component';

describe('FoodAdminScheduleComponent', () => {
  let component: FoodAdminScheduleComponent;
  let fixture: ComponentFixture<FoodAdminScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAdminScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAdminScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
