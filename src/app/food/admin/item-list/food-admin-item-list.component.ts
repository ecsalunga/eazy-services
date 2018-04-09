import { Component, OnInit } from '@angular/core';
import { EmmLibCoreService, UploadToken, FoodItem } from '../../../core';

@Component({
  selector: 'food-admin-item-list',
  templateUrl: './food-admin-item-list.component.html',
  styleUrls: ['./food-admin-item-list.component.css']
})
export class FoodAdminItemListComponent implements OnInit {
  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Item List";
  }

  Select(item: FoodItem) {
    this.core.DL.State.FoodItem = item;
    this.transfer();
  }

  Add() {
    this.core.DL.State.FoodItem = new FoodItem();
    this.transfer();
  }

  public Back() {
    this.core.Load(this.core.DL.State.BackSelector);
  }

  private transfer() {
    this.core.Load("food-admin-item");
  }

  ngOnInit() { }
}