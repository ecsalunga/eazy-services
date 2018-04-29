import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { MenuItem } from '../../models';

@Component({
  selector: 'menu-item-icon',
  templateUrl: './menu-item-icon.component.html',
  styleUrls: ['./menu-item-icon.component.css']
})
export class MenuItemIconComponent implements OnInit {
  @Input()
  Menu: MenuItem;

  @Output() 
  OnClicked = new EventEmitter<MenuItem>();

  constructor(public core: EmmLibCoreService) { }

  Process() {
    this.OnClicked.emit(this.Menu);
  }

  ngOnInit() {
    
  }
}
