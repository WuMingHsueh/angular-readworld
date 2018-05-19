import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clickSearch = new EventEmitter<any>();

  homeLogo: string = 'conduit';
  counter: number = 0;
  searchInputValue: string = '';
  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.homeLogo = (++this.counter % 2 == 0) ? 'conduit' : 'fuck';
  }

  search() {
    this.clickSearch.emit(this.searchInputValue);
  }


}
