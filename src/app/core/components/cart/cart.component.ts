import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, Codes, SellItem } from '../../models';

@Component({
  selector: 'emm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public core: EmmLibCoreService) { }
  
  Remove(item: SellItem) {
    this.core.Publish(new Update(Codes.RemoveTriggered, item));
  }

  ngOnInit() { }
}