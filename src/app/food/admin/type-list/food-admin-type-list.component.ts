import { Component, OnInit } from '@angular/core';
import { EmmLibCoreService, UploadToken, FoodType } from '../../../core';

@Component({
  selector: 'food-admin-type-list',
  templateUrl: './food-admin-type-list.component.html',
  styleUrls: ['./food-admin-type-list.component.css']
})
export class FoodAdminTypeListComponent implements OnInit {
  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Type List";
  }

  Select(item: FoodType) {
    this.core.DL.State.FoodType = item;
    this.transfer();
  }

  List(item: FoodType) {
    this.core.DL.State.ReturnSelector = "food-admin-type-list";
    this.core.DL.State.FoodType = item;
    this.core.Load("food-admin-item-list");
  }

  Add() {
    this.core.DL.State.FoodType = new FoodType(this.core.DL.State.DefaultImage);
    this.transfer();
  }

  private transfer() {
    this.core.Load("food-admin-type");
  }

  ngOnInit() { }
}