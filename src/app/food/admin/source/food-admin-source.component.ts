import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService, UploadToken, FoodSource } from '../../../core';

@Component({
  selector: 'food-admin-source',
  templateUrl: './food-admin-source.component.html',
  styleUrls: ['./food-admin-source.component.css']
})
export class FoodAdminSourceComponent implements OnInit {
  NameFC = new FormControl('', [Validators.required]);
  AddressFC = new FormControl('', [Validators.required]);
  ContactFC = new FormControl('', [Validators.required]);

  Model: FoodSource;
  Token: UploadToken;

  constructor(private core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Source";
    this.Model = this.core.DL.State.FoodSource;
    this.Token = new UploadToken("/images/food/", this.Model.ImageUrl);
  }

  public Save() {
    if(this.Token.IsDirty)
      this.Model.ImageUrl = this.Token.DownloadUrl;

    this.core.DA.FoodSources.Save(this.Model);
    this.transfer();
  }

  public IsOk() {
    return (!this.NameFC.invalid && !this.AddressFC.invalid && !this.ContactFC.invalid);
  }

  public Cancel() {
    this.transfer();
  }

  private transfer() {
    this.core.Load("food-admin-source-list");
  }

  public GetRequiredError(fr: FormControl) {
    return fr.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {}
}