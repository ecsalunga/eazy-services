import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { MenuItem, MenuType, Menus } from '../../models';

@Component({
  selector: 'emm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(public core: EmmLibCoreService) { 
    this.core.DL.State.Title = this.core.DL.State.Menu;
  }

  Process(menu: MenuItem) {
    this.core.AnimateContent();

    if(menu.Type == MenuType.Module)
      this.core.Load(menu.Selector);
    else if(menu.Type == MenuType.Menu) {
      this.core.DL.State.MenuItems = Menus[ menu.Selector ];
      this.core.DL.State.Title = menu.Title;
      this.core.DL.State.Menu = menu.Title;
    }
  }

  ngOnInit() {
    
  }

}
