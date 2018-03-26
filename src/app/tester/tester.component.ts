import { Component, OnInit, OnDestroy } from '@angular/core';

import { EmmLibCoreService, Setting, Codes, Article } from '../core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnDestroy {
  content: string = '<p>Hello <strong>World !</strong></p>';

  constructor(private core: EmmLibCoreService) { }

  Snackbar() {
    this.core.Display("Sample Snackbar", "Done");
  }

  SaveEditor() {
    this.core.Display(this.content, "Done");
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

  ngOnDestroy() {
    
  }

}
