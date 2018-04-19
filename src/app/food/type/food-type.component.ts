import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService, MenuItem, SellItem, ItemType } from '../../core';

@Component({
  selector: 'food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {
  Items: Array<MenuItem>;

  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Types";
    this.Items = new Array<MenuItem>();
  }

  Process(item: MenuItem) {
    this.core.DL.State.ReturnSelector = "food-type";
    let items = this.core.DL.FoodItems.filter(food => food.TypeKey == item.Selector && food.IsAvailable);
    let sellItems = Array<SellItem>();
    items.forEach(food => {
      let sell = new SellItem(food.key, food.SourceName, food.PriceSell);
      sell.ImgSrc = food.ImageUrl;
      sell.Blurb = food.Blurb;
      sell.Rating = food.Rating;
      sell.Type = ItemType.Food;
      sellItems.push(sell);
    });

    this.core.DL.State.Sell = item.Title;
    this.core.DL.State.SellItems = sellItems;

    this.core.Load("emm-sell");
  }

  ngOnInit() {
    this.core.DL.FoodTypes.forEach(type => {
      if(this.core.DL.FoodItems.some(item => item.TypeKey == type.key && item.IsAvailable)) {
        let item = new MenuItem();
        item.Selector = type.key;
        item.ImgSrc = type.ImageUrl;
        item.Title = type.Name;
        item.Blurb = `( ${type.Category} ) ` + type.Blurb;

        this.Items.push(item);
      }
    });
  }
}
