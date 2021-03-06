import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IUser } from '../../models/user';
import { ServiceError } from '../../models/service-error';
import { IAppConfig, APP_CONFIG } from '../../config/app.config';

@Injectable()
export class UserService {
  private baseUrl = this.config.apiEndpoint + '/user';

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
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
