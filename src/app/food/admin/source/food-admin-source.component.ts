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

  Model: FoodSource;
  Token: UploadToken;

  constructor(private core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Source";
    this.Model = this.core.DL.State.FoodSource;
    this.Token = new UploadToken("/images/food/", this.Model.ImageUrl);
  }

  public Save() {
    console.log(this.Model);
  }

  public GetRequiredError(fr: FormControl) {
    return fr.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {
    
  }
}