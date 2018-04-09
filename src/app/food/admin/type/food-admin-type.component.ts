import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService, UploadToken, FoodType } from '../../../core';

@Component({
  selector: 'food-admin-type',
  templateUrl: './food-admin-type.component.html',
  styleUrls: ['./food-admin-type.component.css']
})
export class FoodAdminTypeComponent implements OnInit {
  NameFC = new FormControl('', [Validators.required]);
  CategoryFC = new FormControl('', [Validators.required]);

  Model: FoodType;
  Token: UploadToken;

  constructor(private core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Type";
    this.Model = this.core.DL.State.FoodType;
    this.Token = new UploadToken("/images/food/", this.Model.ImageUrl);
  }

  public Save() {
    if(this.Token.IsDirty)
      this.Model.ImageUrl = this.Token.DownloadUrl;

    this.core.DA.FoodTypes.Save(this.Model);
    this.transfer();
  }

  public IsOk() {
    return (!this.NameFC.invalid && !this.CategoryFC.invalid);
  }

  public Cancel() {
    this.transfer();
  }

  private transfer() {
    this.core.Load("food-admin-type-list");
  }

  public GetRequiredError(fr: FormControl) {
    return fr.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {}
}
