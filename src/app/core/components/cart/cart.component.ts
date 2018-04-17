import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { MenuItem, MenuType, Menus } from '../../models';

@Component({
  selector: 'emm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public core: EmmLibCoreService) { }
  
  ngOnInit() { }
}