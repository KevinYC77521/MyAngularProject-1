import { Component, OnInit } from '@angular/core';

// constant
import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  path = appPath;
  constructor() { }

  ngOnInit() {
  }

}
