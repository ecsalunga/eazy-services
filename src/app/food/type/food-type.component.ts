import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService, MenuItem } from '../../core';

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
    this.core.DL.State.FoodType = this.core.DL.FoodTypes.find(source => source.key == item.Selector);
    this.core.Load("food-item-list");
  }

  ngOnInit() {
    this.core.DL.FoodTypes.forEach(type => {
        let item = new MenuItem();
        item.Selector = type.key;
        item.ImgSrc = type.ImageUrl;
        item.Title = type.Name;
        item.Blurb = `( ${type.Category} ) ` + type.Blurb;

        this.Items.push(item);
    });
  }
}
