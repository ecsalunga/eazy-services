import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { EmmLibModule } from './core';
import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    EmmLibModule.forRoot()
  ],
  entryComponents: [ TesterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
