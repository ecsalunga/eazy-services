import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { OrderItem } from '../../models';
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
    
  }

  ngOnInit() {
  }

}
