import { Component, OnInit } from '@angular/core';

import { appPath } from 'src/app/app-path.const';

import { SendType } from './send-type.enum';

@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent implements OnInit {

  path = appPath;

  sendType = SendType;

  selectType = SendType.EMAIL;

  constructor() { }

  ngOnInit() {
  }

  switch(type: number): void {
    this.selectType = type;
  }

  didSelected(type: number): boolean{
    return this.selectType === type;
  }

}
