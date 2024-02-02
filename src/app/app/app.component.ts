import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"; //AOS - 1



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Belpatram2';

  ngOnInit(): void {
    AOS.init();//AOS - 2 {disable: 'mobile'}
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
    
  }

}
