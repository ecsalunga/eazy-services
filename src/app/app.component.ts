import { Component } from '@angular/core';
import { EmmLibCoreService, FoodSource, Menus, Codes } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private core: EmmLibCoreService) { }

  LoadMenu() {
    this.core.DL.State.Title = Codes.Home;
    this.core.DL.State.Menu = Menus[0].Name;
    this.core.DL.State.MenuItems = Menus[0].Items;
    this.core.Load("menu");
  }

  public get Title(): string {
    return this.core.DL.State.Title;
  }

  public get Control(): string {
    if(this.core.DL.State.ControlCode > 0)
      return `( Control: ${this.core.DL.State.ControlCode} )`;
    else
      return "";
  }
}
