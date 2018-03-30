import { NgModule } from '@angular/core';

import { EmmLibModule } from '../core';

import { FoodTypeComponent } from './type/food-type.component';
import { FoodItemComponent } from './item/food-item.component';
import { FoodSourceComponent } from './source/food-source.component';
import { FoodAdminSourceComponent } from './admin/source/food-admin-source.component';
import { FoodAdminItemComponent } from './admin/item/food-admin-item.component';
import { FoodAdminTypeComponent } from './admin/type/food-admin-type.component';
import { FoodAdminScheduleComponent } from './admin/schedule/food-admin-schedule.component';

@NgModule({
  declarations: [
    FoodTypeComponent,
    FoodItemComponent,
    FoodSourceComponent,
    FoodAdminSourceComponent,
    FoodAdminItemComponent,
    FoodAdminTypeComponent,
    FoodAdminScheduleComponent
  ],
  imports: [
    EmmLibModule.forRoot()
  ],
  entryComponents: [ 
    FoodTypeComponent,
    FoodItemComponent,
    FoodSourceComponent,
    FoodAdminSourceComponent,
    FoodAdminItemComponent,
    FoodAdminTypeComponent,
    FoodAdminScheduleComponent
  ]
})
export class FoodModule { }
