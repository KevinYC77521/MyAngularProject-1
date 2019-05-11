import { Component, OnInit } from '@angular/core';

import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  path = appPath;
  constructor() { }

  ngOnInit() {
  }

}
