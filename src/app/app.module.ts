import { NgModule } from '@angular/core';

import { CKEditorModule } from 'ng2-ckeditor';

import { EmmLibModule } from './core';
import { FoodModule } from './food/food.module';
import { OrderModule } from './order/order.module';

import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent
  ],
  imports: [
    CKEditorModule,
    EmmLibModule.forRoot(),
    FoodModule,
    OrderModule
  ],
  entryComponents: [ TesterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
