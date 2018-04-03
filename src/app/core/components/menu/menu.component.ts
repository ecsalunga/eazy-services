import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, UploadToken, MenuItem, Codes, MenuType, Menus } from '../../models';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = this.core.DL.State.Menu;
  }

  Process(menu: MenuItem) {
    if(menu.Type == MenuType.Module)
      this.core.Load(menu.Selector);
    else if(menu.Type == MenuType.Menu) {
      Menus.forEach(item => {
        if(item.Name == menu.Selector) {
          this.core.DL.State.MenuItems = item.Items;
          this.core.DL.State.Title = menu.Selector;
          this.core.DL.State.Menu = menu.Selector;
        }
      });
    }
  }

  ngOnInit() {
  }

}