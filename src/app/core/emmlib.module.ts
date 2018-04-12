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

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(DataSetting.firebase), AngularFireAuthModule, AngularFireDatabaseModule,
    MatSnackBarModule, MatProgressBarModule, MatIconModule
  ],
  exports: [
    EmmLibOutletComponent, ImageUploaderComponent, RatingComponent, 
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatGridListModule, MatFormFieldModule, 
    MatInputModule, MatIconModule, MatTooltipModule,
    MatGridListModule, MatProgressBarModule, MatSelectModule
  ],
  declarations: [ EmmLibOutletComponent, ImageUploaderComponent, MenuComponent, RatingComponent ],
  entryComponents: [ MenuComponent ]
})
export class EmmLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EmmLibModule,
      providers: [ EmmLibCoreService ]
    };
  }
 }
