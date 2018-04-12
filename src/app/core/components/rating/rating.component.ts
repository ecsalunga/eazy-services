import { Component, OnInit, Input } from '@angular/core';

import { RatingToken } from '../../models';

@Component({
  selector: 'emm-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input()
  Rating: RatingToken;
  Starts: Array<Number>;

  constructor() { }

  Select(item: number) {
    this.Rating.Set(item);
  }

  ngOnInit() {
    if(this.Rating != null) {
      this.Starts = new Array<number>();
      for(let x = 1; x <= this.Rating.Max; x++)
        this.Starts.push(x);
    }
  }

}
