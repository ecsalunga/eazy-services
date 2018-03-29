import { Component } from '@angular/core';
import { EmmLibCoreService  } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private core: EmmLibCoreService) { }

  Load(selector: string) {
    this.core.Load(selector);
  }

  public get Title(): string {
    return this.core.DL.State.Title;
  }

}
