import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, Codes, SellItem, AccessMode } from '../../models';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public core: EmmLibCoreService) { }
  
  Remove(item: SellItem) {
    this.core.Publish(new Update(Codes.RemoveTriggered, item));
    this.core.Display(item.Title + " Removed.");
  }

  IsNotCheckout(): boolean {
    return this.core.DL.State.CurrentSelector != Codes.CheckoutSelector;
  }

  CanCheckout(): boolean {
    return (this.core.DL.State.IsMemberLoaded && this.core.DL.State.AccessMode == AccessMode.Member);
  }

  public Checkout() {
    this.core.DL.State.Cart.Toggle(false);
    this.core.Load(Codes.CheckoutSelector);
  }

  ngOnInit() { }
}