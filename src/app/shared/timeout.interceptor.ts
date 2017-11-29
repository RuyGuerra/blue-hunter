import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/do';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).timeout(4000).do(event => { }, err => { // timeout of 4000 ms
            if (err instanceof HttpErrorResponse) {
                console.log('Error Caught By Timeout Interceptor');
                // Observable.throw(err);
            }
        });
    }
}
