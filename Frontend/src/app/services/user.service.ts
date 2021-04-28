import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserData } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserData {

  apiUrl ="http://localhost:8081/api"
  private httpOptions = {
    headers: new HttpHeaders({
      'ContentType':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': '*',
      'Access-Control-Allow-Headers': 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,access-control-allow-headers,Cluster',
    }),
  };

  constructor(private http: HttpClient) {
    super();
   }
  
  register(user)  {
    return this.http.post(this.apiUrl + '/users/sign-up' ,user, this.httpOptions).pipe(map( res => res));
  }
  login(user)  {
    return this.http.post(this.apiUrl + '/users/sign-in' ,user, this.httpOptions).pipe(map( res => res));
  }

}
