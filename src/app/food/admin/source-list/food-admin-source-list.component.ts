import { Component, OnInit } from '@angular/core';
import { EmmLibCoreService, UploadToken, FoodSource } from '../../../core';

@Component({
  selector: 'food-admin-source-list',
  templateUrl: './food-admin-source-list.component.html',
  styleUrls: ['./food-admin-source-list.component.css']
})
export class FoodAdminSourceListComponent implements OnInit {
  Items: Array<FoodSource>;

  constructor(private core: EmmLibCoreService) {
    this.Items = this.core.DL.FoodSources;
    this.core.DL.State.Title = "Food Admin Source List";
  }

  Select(item: FoodSource) {
    this.core.DL.State.FoodSource = item;
    this.transfer();
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
