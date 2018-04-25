import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { OrderItem, Codes, SellItem } from '../../models';
import { ItemAction } from '../../models/itemaction';
@Component({
  selector: 'checkout',
  templateUrl: './sell-checkout.component.html',
  styleUrls: ['./sell-checkout.component.css']
})
export class SellCheckoutComponent implements OnInit {
  Model: OrderItem;

  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Checkout";
    let account = this.core.DL.State.Account;
    this.Model = new OrderItem();
    this.Model.UID = account.UID;
    this.Model.Name = account.Name;
    this.Model.Email = account.Email;
    this.Model.Address = account.Address;
    this.Model.Contact1 = account.Contact1;
    this.Model.Contact2 = account.Contact2;
  }

  Confirm() {
    this.Model.Items = this.core.DL.State.Cart.Items;
    this.Model.AddAction(new ItemAction(this.core.DL.State.Account.UID, Codes.New, this.core.Stamp.Timestamp));

    this.core.DA.OrderItems.Save(this.Model);
    this.core.DL.State.Cart.Clear();
    this.core.Display("Order submitted.");

    // [TODO] Create landing page to explain things, better to use the article module
    this.core.Home();
  }

  ngOnInit() {
  }

}
