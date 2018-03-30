import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAdminItemComponent } from './food-admin-item.component';

describe('FoodAdminItemComponent', () => {
  let component: FoodAdminItemComponent;
  let fixture: ComponentFixture<FoodAdminItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAdminItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAdminItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
