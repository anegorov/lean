import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url:string = `https://api.binance.com/api/v3/ticker/price`

  getData(curr:string): Observable<any>{
    return this.http.get(this.url,{
      params: {
        symbol: curr
      },
      headers:{'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, PUT, POST"
    }
    });
  }
}
