import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, Codes, MenuItem, MenuType, Menus, SellItem } from '../../models';

@Component({
  selector: 'emm-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  constructor(public core: EmmLibCoreService) { 
    this.core.DL.State.Title = this.core.DL.State.Sell;
  }

  Process(sell: SellItem) {
    this.core.Publish(new Update(Codes.BuyTriggered, sell));
  }

  ngOnInit() { }
}