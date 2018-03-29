import { NgModule } from '@angular/core';

import { EmmLibModule } from '../core';

import { FoodTypeComponent } from './food-type/food-type.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodSourceComponent } from './food-source/food-source.component';

@NgModule({
  declarations: [
    FoodTypeComponent,
    FoodItemComponent,
    FoodSourceComponent
  ],
  imports: [
    EmmLibModule.forRoot()
  ],
  entryComponents: [ 
    FoodTypeComponent,
    FoodItemComponent,
    FoodSourceComponent
  ]
})
export class FoodModule { }
