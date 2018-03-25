import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DataSetting } from './data';
import { EmmLibCoreService } from './emmlibcore.service';
import { EmmLibOutletComponent } from './components/emmlib-outlet/emmlib-outlet.component';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(DataSetting.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  exports: [
    EmmLibOutletComponent,
    BrowserAnimationsModule,
    MatButtonModule
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
