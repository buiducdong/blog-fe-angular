import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClientResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {
 
  public constructor(protected http: HttpClient) { }

  public get(url: string): Observable<HttpClientResponse> {
    return this.http.get<HttpClientResponse>(url).pipe(
        tap((response) => response),
        catchError((err) => of(err))
    );
}

public post(url: string, payload: object, header?: HttpHeaders): Observable<HttpClientResponse> {
    return this.http.post<HttpClientResponse>(url, payload, { headers: header }).pipe(
        tap((response) => response),
        catchError((err) => of(err))
    );
}

public put(url: string, payload: object): Observable<HttpClientResponse> {
    return this.http.put<HttpClientResponse>(url, payload).pipe(
        tap((response) => response),
        catchError((err) => of(err))
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
public delete(url: string, payload?: object | any[]): Observable<HttpClientResponse> {
    return this.http.delete<HttpClientResponse>(url, { body: payload }).pipe(
        tap((response) => response),
        catchError((err) => of(err))
    );
}
}
