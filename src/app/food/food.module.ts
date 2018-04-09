import { NgModule } from '@angular/core';

import { EmmLibModule } from '../core';

import { FoodTypeComponent } from './type/food-type.component';
import { FoodItemComponent } from './item/food-item.component';
import { FoodSourceComponent } from './source/food-source.component';
import { FoodAdminSourceComponent } from './admin/source/food-admin-source.component';
import { FoodAdminItemComponent } from './admin/item/food-admin-item.component';
import { FoodAdminTypeComponent } from './admin/type/food-admin-type.component';
import { FoodAdminScheduleComponent } from './admin/schedule/food-admin-schedule.component';
import { FoodAdminSourceListComponent } from './admin/source-list/food-admin-source-list.component';
import { FoodAdminTypeListComponent } from './admin/type-list/food-admin-type-list.component';

@NgModule({
  declarations: [
    FoodTypeComponent, FoodAdminTypeComponent, FoodAdminTypeListComponent,
    FoodItemComponent, FoodAdminItemComponent,
    FoodSourceComponent, FoodAdminSourceComponent, FoodAdminSourceListComponent,
    FoodAdminScheduleComponent
  ],
  imports: [
    EmmLibModule.forRoot()
  ],
  entryComponents: [ 
    FoodTypeComponent, FoodAdminTypeComponent, FoodAdminTypeListComponent,
    FoodItemComponent, FoodAdminItemComponent,
    FoodSourceComponent, FoodAdminSourceComponent, FoodAdminSourceListComponent,
    FoodAdminScheduleComponent
  ]
})
export class FoodModule { }
