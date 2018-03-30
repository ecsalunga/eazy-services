import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService  } from '../../core';

@Component({
  selector: 'food-source',
  templateUrl: './food-source.component.html',
  styleUrls: ['./food-source.component.css']
})
export class FoodSourceComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private core: EmmLibCoreService) {
    this.core.DL.State.Title = "Food Source";
  }

  getEmailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

}
