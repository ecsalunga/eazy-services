import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';

@Component({
  selector: 'checkout',
  templateUrl: './sell-checkout.component.html',
  styleUrls: ['./sell-checkout.component.css']
})
export class SellCheckoutComponent implements OnInit {
  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Checkout";
  }

  Confirm() {
    
  }

  ngOnInit() {
  }

}
