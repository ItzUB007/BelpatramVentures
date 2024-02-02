import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  // Rolling Numbers
  pickANumber = 500;
  endVal = 1000;
  endVal2 = 25000;
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };

  doThisOnComplete() {
    console.log('complete!');
  }

  applyEndVal() {
    this.endVal = Number(this.pickANumber);
  }

  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5,
    };
  }

  resetOptions() {
    this.opts = {
      enableScrollSpy: true,
    };
  }

  // End of Rolling Numbers


  ngOnInit(): void {




  }

}
