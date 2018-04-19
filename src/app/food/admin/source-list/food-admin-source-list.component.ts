import { Component, OnInit } from '@angular/core';
import { EmmLibCoreService, UploadToken, FoodSource, RatingToken, Codes } from '../../../core';

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
    this.core.DL.State.ReturnSelector = "food-admin-source-list";
    this.core.DL.State.FoodSource = item;
    this.core.Load("food-admin-item-list");
  }

  GetRating(rating: number): RatingToken {
    return new RatingToken(rating, false);
  }

  Add() {
    this.core.DL.State.FoodSource = new FoodSource(Codes.DefaultImage);
    this.transfer();
  }

  private transfer() {
    this.core.Load("food-admin-source");
  }

  ngOnInit() { }
}