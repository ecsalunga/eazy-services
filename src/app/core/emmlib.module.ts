import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { 
  MatButtonModule, MatSnackBarModule, MatGridListModule, MatFormFieldModule, MatInputModule 
} from '@angular/material';

import { DataSetting } from './data';
import { EmmLibCoreService } from './emmlibcore.service';
import { EmmLibOutletComponent } from './components/emmlib-outlet/emmlib-outlet.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(DataSetting.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatSnackBarModule
  ],
  exports: [
    EmmLibOutletComponent, BrowserModule,
    BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatGridListModule, MatFormFieldModule, MatInputModule
  ],
  declarations: [ EmmLibOutletComponent ]
})
export class EmmLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EmmLibModule,
      providers: [ EmmLibCoreService ]
    };
  }
 }
