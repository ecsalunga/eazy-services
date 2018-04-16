import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService, MenuItem } from '../../core';

@Component({
  selector: 'food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {
  Items: Array<MenuItem>;

  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Item List";
    this.Items = new Array<MenuItem>();
  }

  Process(item: MenuItem) {
    console.log(item);  
  }

  private loadList() {
    this.core.DL.State.FoodItems.forEach(food => {
      let type = this.core.DL.FoodTypes.find(type => type.key ==  food.TypeKey);
      let item = new MenuItem();
      item.Selector = food.key;
      item.ImgSrc = type.ImageUrl
      item.Title = type.Name + ` (PHP ${food.PriceSell})`;
      item.Blurb = food.SourceName;

      this.Items.push(item);
    });
  }

  ngOnInit() {
    this.loadList();
  }
}
