import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-by-author',
  templateUrl: './books-by-author.component.html',
  styleUrls: ['./books-by-author.component.less']
})
export class BooksByAuthorComponent implements OnInit {
  title = 'Books (by author)';

  constructor() { }

  ngOnInit() {
  }

  onSearch(event) {
    console.log('Search Books by Author:', event);
  }

}
