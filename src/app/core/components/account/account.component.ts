import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, Codes, UploadToken, Account, AccessMode } from '../../models';
@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  NameFC = new FormControl('', [Validators.required]);
  AddressFC = new FormControl('', [Validators.required]);
  ContactFC = new FormControl('', [Validators.required]);

  Model: Account;
  Token: UploadToken;
  
  constructor(public core: EmmLibCoreService) {
    this.core.DL.State.Title = "Account Information";
    this.Model =  Object.assign({}, this.core.DL.State.Account);
    this.Token = new UploadToken("/images/account/", this.Model.ImageUrl);
  }

  public Save() {
    if(this.Token.IsDirty)
      this.Model.ImageUrl = this.Token.DownloadUrl;

    if(this.core.DL.State.AccessMode == AccessMode.Member)
      this.core.DA.MemberItems.Save(this.Model);
    else
      this.core.DA.UserItems.Save(this.Model);
    
    this.core.Display("Account Info Saved.");
  }

  public Logout() {
    this.core.LogOut();
  }

  public IsOk() {
    return (!this.NameFC.invalid && !this.AddressFC.invalid && !this.ContactFC.invalid);
  }

  public GetRequiredError(fr: FormControl) {
    return fr.hasError('required') ? 'You must enter a value' : '';
  }

  ngOnInit() {
  }

}
