import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { 
  MatButtonModule, MatSnackBarModule, MatGridListModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatTooltipModule, MatProgressBarModule, MatSelectModule
} from '@angular/material';

import { DataSetting } from './data';
import { EmmLibCoreService } from './emmlibcore.service';
import { EmmLibOutletComponent } from './components/emmlib-outlet/emmlib-outlet.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { MenuComponent } from './components/menu/menu.component';
import { RatingComponent } from './components/rating/rating.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SellItemComponent } from './components/sell-item/sell-item.component';
import { SellComponent } from './components/sell/sell.component';
import { CartComponent } from './components/cart/cart.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SellCheckoutComponent } from './components/sell-checkout/sell-checkout.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(DataSetting.firebase), AngularFireAuthModule, AngularFireDatabaseModule,
    MatButtonModule, MatSnackBarModule, MatProgressBarModule, MatIconModule, MatTooltipModule
  ],
  exports: [
    EmmLibOutletComponent, ImageUploaderComponent, RatingComponent, MenuItemComponent, SellItemComponent, NotificationComponent,
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatGridListModule, MatFormFieldModule, 
    MatInputModule, MatIconModule, MatTooltipModule,
    MatGridListModule, MatProgressBarModule, MatSelectModule
  ],
  declarations: [ 
    EmmLibOutletComponent, ImageUploaderComponent, MenuComponent, RatingComponent, MenuItemComponent, 
    SellItemComponent, SellComponent, CartComponent, NotificationComponent, SellCheckoutComponent 
  ],
  entryComponents: [ MenuComponent, SellComponent, SellCheckoutComponent ]
})
export class EmmLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EmmLibModule,
      providers: [ EmmLibCoreService ]
    };
  }
 }
