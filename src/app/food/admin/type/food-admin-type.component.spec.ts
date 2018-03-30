import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAdminTypeComponent } from './food-admin-type.component';

describe('FoodAdminTypeComponent', () => {
  let component: FoodAdminTypeComponent;
  let fixture: ComponentFixture<FoodAdminTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAdminTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAdminTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
