import { Component } from '@angular/core';
import { EmmLibCoreService, FoodSource } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private core: EmmLibCoreService) { }

  Load(selector: string) {
    this.core.Load(selector);
  }

  LoadFoodSource() {
    let foodSource = new FoodSource();
    foodSource.Name = "testing";
    this.core.DL.State.FoodSource = foodSource;
    this.core.Load("food-admin-source");
  }

  public get Title(): string {
    return this.core.DL.State.Title;
  }

}
