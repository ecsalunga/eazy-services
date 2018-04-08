import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAdminSourceListComponent } from './food-admin-source-list.component';

describe('FoodAdminSourceListComponent', () => {
  let component: FoodAdminSourceListComponent;
  let fixture: ComponentFixture<FoodAdminSourceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAdminSourceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAdminSourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
