import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService  } from '../../core';

@Component({
  selector: 'food-source',
  templateUrl: './food-source.component.html',
  styleUrls: ['./food-source.component.css']
})
export class FoodSourceComponent implements OnInit {

  constructor(private core: EmmLibCoreService) { 
    this.core.DL.State.Title = "Food Source";
  }

  ngOnInit() {
    
  }

}
