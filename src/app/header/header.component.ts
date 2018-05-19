import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeLogo: string = 'conduit';
  counter: number = 0;
  searchInputValue: string = '';
  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.homeLogo = (++this.counter % 2 == 0) ? 'conduit' : 'fuck';
  }


}
