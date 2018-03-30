import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService  } from '../../../core';

@Component({
  selector: 'food-admin-source',
  templateUrl: './food-admin-source.component.html',
  styleUrls: ['./food-admin-source.component.css']
})
export class FoodAdminSourceComponent implements OnInit {
  name = new FormControl('', [Validators.required]);

  constructor(private core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Admin Source";
  }

  getNameError() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {
  }

}
