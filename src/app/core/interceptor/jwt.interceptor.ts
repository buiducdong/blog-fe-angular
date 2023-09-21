/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LocalstorageService } from '../service/localstorage/localstorage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public constructor(
    private localstorageService: LocalstorageService
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = this.addToHeader(request);

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  /**
 * Method to add the Authorization token in header. Returns the new request
 */
  private addToHeader(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.localstorageService.get('id_token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bronze ${token}`
        }
      });
    }

    return request;
  }
}
