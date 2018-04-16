import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { MenuItem } from '../../models';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input()
  Menu: MenuItem;

  @Output() 
  OnClicked = new EventEmitter<MenuItem>();

  constructor(public core: EmmLibCoreService) { }

  Process(menu: MenuItem) {
    this.OnClicked.emit(this.Menu);
  }

  ngOnInit() {
    
  }
}