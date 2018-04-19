import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService, MenuItem, ItemType, SellItem } from '../../core';

@Component({
  selector: 'food-source',
  templateUrl: './food-source.component.html',
  styleUrls: ['./food-source.component.css']
})
export class FoodSourceComponent implements OnInit {
  Items: Array<MenuItem>;

  constructor(private core: EmmLibCoreService) { 
    this.core.DL.State.Title = "Food Sources";
    this.Items = new Array<MenuItem>();
  }

  Process(item: MenuItem) {
    this.core.DL.State.ReturnSelector = "food-source";
    let items = this.core.DL.FoodItems.filter(food => food.SourceKey == item.Selector && food.IsAvailable);
    let sellItems = Array<SellItem>();
    items.forEach(food => {
      let sell = new SellItem(food.key, food.TypeName, food.PriceSell);
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
    this.core.DL.FoodSources.forEach(source => {
      if(this.core.DL.FoodItems.some(item => item.SourceKey == source.key && item.IsAvailable)) {
        let item = new MenuItem();
        item.Selector = source.key;
        item.ImgSrc = source.ImageUrl;
        item.Title = source.Name;
        item.Blurb = source.Blurb;
        item.Rating = source.Rating;
        this.Items.push(item);
      }
    });
  }

}
