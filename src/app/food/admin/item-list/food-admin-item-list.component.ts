import { Component, OnInit } from '@angular/core';
import { EmmLibCoreService, UploadToken, FoodItem, Codes, DelayCall } from '../../../core';

@Component({
  selector: 'food-admin-item-list',
  templateUrl: './food-admin-item-list.component.html',
  styleUrls: ['./food-admin-item-list.component.css']
})
export class FoodAdminItemListComponent implements OnInit {
  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Item List";
    this.core.DL.State.FoodItems = new Array<FoodItem>();
  }

  Select(item: FoodItem) {
    this.core.DL.State.FoodItem = item;
    this.transfer();
  }

  Schedule(item: FoodItem) {
    item.IsAvailable = !item.IsAvailable;
    this.core.DA.FoodItems.Save(item);
  }

  Add() {
    this.core.DL.State.FoodItem = new FoodItem();
    this.transfer();
  }

  Back() {
    this.core.Load(this.core.DL.State.ReturnSelector);
  }

  private transfer() {
    this.core.Load("food-admin-item");
  }

  private loadList() {
    if(this.core.DL.State.ReturnSelector == Codes.FoodAdminTypeSelector) 
      this.core.DL.State.FoodItems = this.core.DL.FoodItems.filter(food => food.TypeKey == this.core.DL.State.FoodType.key);
    else
      this.core.DL.State.FoodItems = this.core.DL.FoodItems.filter(food => food.SourceKey == this.core.DL.State.FoodSource.key); 
  }

  ngOnInit() {
    this.loadList();
    this.core.Changed.subscribe(update => {
      if(update.Type == Codes.DataLoaded && update.Code == Codes.FoodItems)
        this.loadList();
    });
  }
}