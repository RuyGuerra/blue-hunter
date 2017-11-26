import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { IUser } from '../../models/user';
import { ServiceError } from '../../models/service-error';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  private baseUrl = environment.baseApiUrl + '/user';

  constructor(
    private http: HttpClient
  ) {

  }

  getUsersByName(name: string): Observable<IUser[] | ServiceError> {
    return this.http.get<IUser[]>(this.baseUrl + '/by-name/' + name)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse): Observable<ServiceError> {
    const dataError = new ServiceError();
    if (err.error instanceof Error) {
      // A client-side or network error occurred.
      dataError.message = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      dataError.message = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    dataError.errorNumber = 101;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return Observable.throw(dataError);
  }

}
