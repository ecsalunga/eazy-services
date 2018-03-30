import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService, FoodSource } from '../../../core';

@Component({
  selector: 'food-admin-source',
  templateUrl: './food-admin-source.component.html',
  styleUrls: ['./food-admin-source.component.css']
})
export class FoodAdminSourceComponent implements OnInit {
  NameFC = new FormControl('', [Validators.required]);
  AddressFC = new FormControl('', [Validators.required]);

  Model: FoodSource;

  constructor(private core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Source";
    this.Model = this.core.DL.State.FoodSource;
  }

  public Save() {
    console.log(this.Model);
    console.log(this.core.DL.State.FoodSource);
  }

  public GetRequiredError(fr: FormControl) {
    return fr.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {
    
  }
}