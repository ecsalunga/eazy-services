import { NgModule } from '@angular/core';

import { EmmLibModule } from '../core';

import { FoodTypeComponent } from './type/food-type.component';
import { FoodItemComponent } from './item/food-item.component';
import { FoodItemListComponent } from './item-list/food-item-list.component';
import { FoodSourceComponent } from './source/food-source.component';
import { FoodAdminSourceComponent } from './admin/source/food-admin-source.component';
import { FoodAdminItemComponent } from './admin/item/food-admin-item.component';
import { FoodAdminTypeComponent } from './admin/type/food-admin-type.component';
import { FoodAdminSourceListComponent } from './admin/source-list/food-admin-source-list.component';
import { FoodAdminTypeListComponent } from './admin/type-list/food-admin-type-list.component';
import { FoodAdminItemListComponent } from './admin/item-list/food-admin-item-list.component';

@NgModule({
  declarations: [
    FoodTypeComponent, FoodAdminTypeComponent, FoodAdminTypeListComponent,
    FoodItemComponent, FoodItemListComponent, FoodAdminItemComponent, FoodAdminItemListComponent,
    FoodSourceComponent, FoodAdminSourceComponent, FoodAdminSourceListComponent
  ],
  imports: [
    EmmLibModule.forRoot()
  ],
  entryComponents: [ 
    FoodTypeComponent, FoodAdminTypeComponent, FoodAdminTypeListComponent,
    FoodItemComponent, FoodItemListComponent, FoodAdminItemComponent, FoodAdminItemListComponent,
    FoodSourceComponent, FoodAdminSourceComponent, FoodAdminSourceListComponent
  ]
})
export class FoodModule { }
