import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmmLibCoreService, Setting, Codes, Article, DelayDecorator, MemoryDecorator } from '../core';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
@MemoryDecorator()
export class TesterComponent implements OnDestroy {
  content: string = '<p>Hello <strong>World !</strong></p>';
  constructor(private core: EmmLibCoreService) { }

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

  ngOnDestroy() {
    
  }

}
