import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://frontend-take-home.fetchrewards.com/form';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor( private http: HttpClient) {}

  getData(){
    return this.http.get(this.url);
  };

  postData(data){
    return this.http.post(this.url, data, this.httpOptions);
  };
}