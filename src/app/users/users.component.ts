import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { IUser } from '../models/user';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  displayedColumns = ['id', 'fullName', 'gender', 'age', 'email', 'phone', 'username'];
  dataSource;

  constructor(
    private userService: UserService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSearch(event) {
    console.log('Search users:', event);
    this.userService.getUsersByName(event)
      .subscribe((users: IUser[]) => {
        console.log('>>>>> Observable: ', users);
        if (users.length === 0) {
          this.openSnackBar('Sorry no results found. Please modify your search criteria and try again.', 'Ok');
        }
        this.dataSource = new UsersDataSource(users);
      },
      (err) => console.log(err));
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}

export class UsersDataSource extends DataSource<any> {
  constructor(private _users: IUser[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IUser[]> {
    return Observable.of(this._users);
  }

  disconnect() { }
}


