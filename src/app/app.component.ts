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

}
