import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { SellItem, RatingToken } from '../../models';

@Component({
  selector: 'sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.css']
})
export class SellItemComponent implements OnInit {
  CCY: string;

  @Input()
  Sell: SellItem;

  @Output() 
  OnClicked = new EventEmitter<SellItem>();

  constructor(public core: EmmLibCoreService) { }

  GetRating(): RatingToken {
    return new RatingToken(this.Sell.Rating, false);
  }

  Process() {
    this.OnClicked.emit(this.Sell);
  }

  ngOnInit() {
    this.CCY = this.core.DL.Setting.CurrencySymbol;
  }
}