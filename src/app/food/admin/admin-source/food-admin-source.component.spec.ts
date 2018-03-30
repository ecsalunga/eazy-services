import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAdminSourceComponent } from './food-admin-source.component';

describe('FoodAdminSourceComponent', () => {
  let component: FoodAdminSourceComponent;
  let fixture: ComponentFixture<FoodAdminSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAdminSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAdminSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
