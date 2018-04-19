import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService, Setting, Codes, DelayCall, CommandItem, CommandType, RatingToken } from '../core';
import { ArticleItem } from '../core/models/article';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent {
  rating: RatingToken;
  content: string = '<p>Hello <strong>World !</strong></p>';
  viewPage: string = "food-item";

  constructor(private core: EmmLibCoreService) { 
    this.core.DL.State.Title = "Tester Page";
    this.rating = new RatingToken(3);
  }

  SaveEditor() {
    this.core.Display(this.content);
  }

  ViewCommand() {
    let cmd = new CommandItem();
    cmd.SessionCode = this.core.DL.State.SessionCode;
    cmd.Type = CommandType.View;
    cmd.IssuerUID = this.core.DL.FBUser.uid;
    cmd.TargetUID = this.core.DL.FBUser.uid;
    cmd.Data = this.viewPage;

    this.core.Execute(cmd);
  }

  Login() {
    this.core.LogInWithFacebook();
  }

  Logoff() {
    this.core.LogOut();
  }

  @DelayCall(3000)
  DelayTrigger(msg: string) {
    this.core.Display("Delay Trigger: " + msg);
  }
}
