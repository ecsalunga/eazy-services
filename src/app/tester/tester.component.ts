import { Component, OnInit } from '@angular/core';

import { EmmLibCoreService, Setting, Codes } from '../core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  constructor(private core: EmmLibCoreService) { }

  Snackbar() {
    this.core.Display("Sample Snackbar", "Done");
  }

  SaveSetting() {
    let setting = new Setting();
    setting.CurrencySymbol = "PHP";
    setting.Name = "EAZY Services";
    setting.Footer = "EAZY Services © 2018"
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

  ngOnInit() {
  }

}
