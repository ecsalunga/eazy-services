import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { EmmLibCoreService, FoodSource, Menus, Codes, DelayDecorator } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('loaderState', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0.1
      })),
      transition('out => in', animate('500ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  constructor(private core: EmmLibCoreService) {
    this.init();
  }

  @DelayDecorator(100)
  private init() {
    this.Home();
  }

  public Home() {
    this.core.DL.State.MenuItems = Menus[Codes.Home];
    this.core.Load("emm-menu");
  }

  public get Title(): string {
    return this.core.DL.State.Title;
  }

  public get LoaderState(): string {
    return this.core.DL.State.LoaderState;
  }

  public get Control(): string {
    if(this.core.DL.State.ControlCode > 0)
      return `( Control: ${this.core.DL.State.ControlCode} )`;
    else
      return "";
  }
}
