import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    EmmLibModule.forRoot()
  ],
  providers: [],
  entryComponents: [ TesterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
