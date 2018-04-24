import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { EmmLibCoreService, FoodSource, Menus, Codes, DelayCall } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('loaderState', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0.1
      })),
      transition('out => in', animate('500ms ease-in-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  private _sub: Subscription;

  constructor(public core: EmmLibCoreService) { }

  public Home() {
    this.core.Home();
  }

  public BackToMenu() {
    this.core.Load(Codes.MenuSelector);
  }

  public HasBackToMenu(): boolean {
    return (this.core.DL.State.CurrentSelector != Codes.MenuSelector);
  }

  ngOnInit() {
    if (this.core.IsCoreLoaded)
      this.init();
    else {
      this._sub = this.core.Changed.subscribe(update => {
        this.init();
        this._sub.unsubscribe();
      });
    }
  }

  @DelayCall(500)
  private init() {
    this.Home();
  }
}
