import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPath } from 'src/app/core/config/api-path';
import { HttpClientResponse } from 'src/app/core/models';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
    providedIn: 'root'
  })
  export class HomepageService extends HttpService {
  
    public constructor(protected override http: HttpClient) {
      super(http);
    }
  
    public getUsers(): Observable<HttpClientResponse>{
      return this.get(ApiPath.GET_USERS) as Observable<HttpClientResponse>;
    }
  }