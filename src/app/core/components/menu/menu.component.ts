import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { MenuItem, MenuType, MenuGroup, MenuMode, Menus } from '../../models';

@Component({
  selector: 'emm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(public core: EmmLibCoreService) { 
    this.core.DL.State.Title = this.core.DL.State.MenuGroup.Title;
  }

  IsIcon(): boolean {
    return this.core.DL.State.MenuGroup.Mode == MenuMode.Icon;
  }

  IsCard(): boolean {
    return this.core.DL.State.MenuGroup.Mode == MenuMode.Card;
  }

  Process(menu: MenuItem) {
    this.core.AnimateContent();
  
    if(menu.Type == MenuType.Component)
      this.core.Load(menu.Selector);
    else if(menu.Type == MenuType.Menu) {
      this.core.DL.State.MenuGroup = Menus[ menu.Selector ];
      this.core.DL.State.Title = this.core.DL.State.MenuGroup.Title;
    }
  }

  ngOnInit() { }
}