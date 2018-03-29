import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSourceComponent } from './food-source.component';

describe('FoodSourceComponent', () => {
  let component: FoodSourceComponent;
  let fixture: ComponentFixture<FoodSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
