import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { IBook } from '../models/book';
import { BookService } from '../core/services/book.service';

@Component({
  selector: 'app-books-by-title',
  templateUrl: './books-by-title.component.html',
  styleUrls: ['./books-by-title.component.less']
})
export class BooksByTitleComponent implements OnInit {
  title = 'Books (by title)';
  displayedColumns = ['id', 'title', 'author', 'yearPublished', 'price', 'rating'];
  dataSource;

  constructor(
    private bookService: BookService,
    public snackBar: MatSnackBar
  ) {

  }

  ngOnInit() {
  }

  onSearch(event) {
    console.log('Search users:', event);
    this.bookService.getBooksByTitle(event)
      .subscribe((users: IBook[]) => {
        console.log('>>>>> Observable: ', users);
        if (users.length === 0) {
          this.openSnackBar('Sorry no results found. Please modify your search criteria and try again.', 'Ok');
        }
        this.dataSource = new BooksDataSource(users);
      },
      (err) => console.log(err));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}

export class BooksDataSource extends DataSource<any> {
  constructor(private _books: IBook[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IBook[]> {
    return Observable.of(this._books);
  }

  disconnect() { }
}


