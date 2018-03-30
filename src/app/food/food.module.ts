import { NgModule } from '@angular/core';

import { EmmLibModule } from '../core';

import { FoodTypeComponent } from './type/food-type.component';
import { FoodItemComponent } from './item/food-item.component';
import { FoodSourceComponent } from './source/food-source.component';
import { FoodAdminSourceComponent } from './admin/admin-source/food-admin-source.component';

@NgModule({
  declarations: [
    FoodTypeComponent,
    FoodItemComponent,
    FoodSourceComponent,
    FoodAdminSourceComponent
  ],
  imports: [
    EmmLibModule.forRoot()
  ],
  entryComponents: [ 
    FoodTypeComponent,
    FoodItemComponent,
    FoodSourceComponent,
    FoodAdminSourceComponent
  ]
})
export class FoodModule { }
