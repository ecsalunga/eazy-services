import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EmmLibCoreService } from '../../emmlibcore.service';
import { Update, Codes } from '../../models';

@Component({
  selector: 'emmlib-outlet',
  templateUrl: './emmlib-outlet.component.html',
  styleUrls: ['./emmlib-outlet.component.css']
})
export class EmmLibOutletComponent implements OnInit {
  @ViewChild('viewChild', { read: ViewContainerRef })
  viewChild: ViewContainerRef;

  @ViewChild('imageSelector', {read: ViewContainerRef })
  imageSelector: ViewContainerRef;

  private _img: HTMLInputElement;

  constructor(private core: EmmLibCoreService) { }

  ImageChange() {
    this.core.Publish(new Update(Codes.ImageChanged, this._img.files[0]));
  }

  ngOnInit() {
    this._img = <HTMLInputElement>this.imageSelector.element.nativeElement;
    this.core.SetComponents(this.viewChild, this._img);
  }
}
