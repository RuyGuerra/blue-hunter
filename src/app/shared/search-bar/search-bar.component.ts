import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  @Input() title: string;
  @Output() search = new EventEmitter();
  simput: any;
  value: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // console.log('====>', this.value);
    this.search.emit(this.value);
  }

}
