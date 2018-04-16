import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService, MenuItem } from '../../core';

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
    this.core.DL.State.FoodSource = this.core.DL.FoodSources.find(source => source.key == item.Selector);
    this.core.Load("food-item-list");
  }

  ngOnInit() {
    this.core.DL.FoodSources.forEach(source => {
      let item = new MenuItem();
      item.Selector = source.key;
      item.ImgSrc = source.ImageUrl;
      item.Title = source.Name;
      item.Blurb = source.Blurb;

      this.Items.push(item);
  });
  }

}
