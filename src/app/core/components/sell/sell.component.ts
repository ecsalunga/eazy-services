import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, Codes, ItemType, SellItem } from '../../models';

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
    let buy = Object.assign({}, sell);

    if(buy.Type == ItemType.Food) {
      let selected = this.core.DL.FoodItems.find(item => item.key == buy.ItemKey);
      buy.Title = `${selected.TypeName} (${selected.SourceName})`;
    }

    this.core.DL.State.Cart.Toggle(false);
    this.core.Publish(new Update(Codes.BuyTriggered, buy));
  }

  ngOnInit() { }
}