import { NgModule } from '@angular/core';

import { EmmLibModule } from '../core';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
  OrderListComponent
  ],
  imports: [
    EmmLibModule.forRoot()
  ],
  entryComponents: [ OrderListComponent ]
})
export class OrderModule { }
