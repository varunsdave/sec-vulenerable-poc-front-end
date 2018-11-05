import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class BackendCallService {

  constructor(private http: HttpClient) {}

  public getBackendData(symbol): Observable<any> {
    const HEADERS = new Headers();

    HEADERS.append('Content-Type', 'application/json');
    HEADERS.append('Access-Control-Allow-Origin', '*');
    return this.http.get(`https://backend-test-app.herokuapp.com/v1/token`);
    }

  public getBackendDataWeak(): Observable<any> {
    const HEADERS = new Headers();

    HEADERS.append('Content-Type', 'application/json');
    HEADERS.append('Access-Control-Allow-Origin', '*');
    
    const tenantId = localStorage.getItem('userId');

    return this.http.get(`https://backend-test-app.herokuapp.com/v1/token/exposed/${tenantId}`);
  }
}
