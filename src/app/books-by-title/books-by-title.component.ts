import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-by-title',
  templateUrl: './books-by-title.component.html',
  styleUrls: ['./books-by-title.component.less']
})
export class BooksByTitleComponent implements OnInit {
  title = 'Books (by title)';

  constructor() { }

  ngOnInit() {
  }

  onSearch(event) {
    console.log('Search Books by Title:', event);
  }

}
