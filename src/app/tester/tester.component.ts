import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EmmLibCoreService, Setting, Codes, DelayDecorator, MemoryDecorator } from '../core';
import { ArticleItem } from '../core/models/article';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
@MemoryDecorator()
export class TesterComponent {
  content: string = '<p>Hello <strong>World !</strong></p>';
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private core: EmmLibCoreService) { 
    this.core.DL.State.Title = "Tester Page";
  }

  SaveEditor() {
    this.core.Display(this.content);
  }

  SaveSetting() {
    let setting = new Setting();
    setting.CurrencySymbol = "PHP";
    setting.Name = "EAZY Services";
    setting.Footer = "EAZY Services © 2018";
    this.core.DA.Setting.Save(setting);
  }

  SelectImage() {
    this.core.SelectImage();
    this.core.Changed.subscribe(update => {
      if(update.Type == Codes.ImageChange) {
        this.core.Display((<File>update.Data).name);
        this.core.Upload("/images/test.png", update.Data);
      }
      else if(update.Type == Codes.FileUploaded)
        this.core.Display(update.Data.downloadURL);
    })
  }

  DelayCall() {
    this.DelayTrigger("Emmanuel");
  }

  @DelayDecorator(3000)
  DelayTrigger(msg: string) {
    this.core.Display("Delay Trigger: " + msg);
  }

  getEmailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
