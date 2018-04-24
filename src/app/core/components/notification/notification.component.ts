import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { AccessMode } from '../../models';
@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.PhotoUrl
  }

  public Account() {
    if(this.core.DL.State.AccessMode != AccessMode.Guest)
      this.core.Load("account");
    else
      this.core.LogInWithFacebook();
  }

  ngOnInit() { }
}