import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      $("#backTotop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
       });
    })

  }

}
