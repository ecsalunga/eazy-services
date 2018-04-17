import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService, UploadToken, FoodItem, Codes, DelayCall, RatingToken } from '../../../core';

@Component({
  selector: 'food-admin-item',
  templateUrl: './food-admin-item.component.html',
  styleUrls: ['./food-admin-item.component.css']
})
export class FoodAdminItemComponent implements OnInit {
  CodeFC = new FormControl(null, [ Validators.required ]);
  SellFC = new FormControl(null, [ Validators.required, Validators.min(1) ]);
  BuyFC = new FormControl(null, [ Validators.required, Validators.min(1) ]);

  Model: FoodItem;
  Rating: RatingToken;

  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Item";
    this.Model = this.core.DL.State.FoodItem;
    this.Rating = new RatingToken(this.Model.Rating);
  }

  public Save() {
    if(this.Model.SourceKey != null) {
      let source = this.core.DL.FoodSources.find(item => item.key == this.Model.SourceKey);
      this.Model.SourceName = source.Name;
    }

    if(this.Model.TypeKey != null) {
      let type = this.core.DL.FoodTypes.find(item => item.key == this.Model.TypeKey);
      this.Model.TypeName = type.Name;
      this.Model.ImageUrl = type.ImageUrl;
      this.Model.Blurb = type.Blurb;
    }

    if(this.Rating.IsDirty)
      this.Model.Rating = this.Rating.Value;

    this.core.DA.FoodItems.Save(this.Model);
    this.transfer();
  }

  public IsOk() {
    return (!this.CodeFC.invalid && !this.SellFC.invalid && !this.BuyFC.invalid);
  }

  public Cancel() {
    this.transfer();
  }
  
  private transfer() {
    this.core.Load("food-admin-item-list");
  }

  public GetRequiredError(fr: FormControl) {
    return fr.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {}
}
