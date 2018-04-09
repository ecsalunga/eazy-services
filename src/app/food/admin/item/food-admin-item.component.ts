import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService, UploadToken, FoodItem, Codes } from '../../../core';

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

  constructor(private core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Item";
    this.Model = this.core.DL.State.FoodItem;
  }

  public Save() {
    if(this.core.DL.State.BackSelector == Codes.FoodAdminTypeSelector) {
      this.Model.TypeName = this.core.DL.State.FoodType.Name;
      this.Model.TypeKey = this.core.DL.State.FoodType.key;
    }
    else {
      this.Model.SourceName = this.core.DL.State.FoodSource.Name;
      this.Model.SourceKey = this.core.DL.State.FoodSource.key;
    }

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
