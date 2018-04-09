import { Component, OnInit } from '@angular/core';
import { EmmLibCoreService, UploadToken, FoodSource } from '../../../core';

@Component({
  selector: 'food-admin-source-list',
  templateUrl: './food-admin-source-list.component.html',
  styleUrls: ['./food-admin-source-list.component.css']
})
export class FoodAdminSourceListComponent implements OnInit {
  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Source List";
  }

  Select(item: FoodSource) {
    this.core.DL.State.FoodSource = item;
    this.transfer();
  }

  List(item: FoodSource) {
    this.core.DL.State.BackSelector = "food-admin-source-list";
    this.core.DL.State.FoodSource = item;
    this.core.DL.State.FoodItems = this.core.DL.FoodItems.filter(food => food.SourceKey == item.key);
    this.core.Load("food-admin-item-list");
  }

  Add() {
    this.core.DL.State.FoodSource = new FoodSource(this.core.DL.State.DefaultImage);
    this.transfer();
  }

  private transfer() {
    this.core.Load("food-admin-source");
  }

  ngOnInit() { }
}