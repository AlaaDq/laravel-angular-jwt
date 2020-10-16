import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError,retry,tap } from 'rxjs/operators';

import { IUser } from '../../app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    baseUrl: string = 'http://localhost:8000/api/';

    constructor(private http: HttpClient) { }

    
    
//   signup(username: string, email: string, password: string) {
  signup(user:IUser) {
    return this.http.post(this.baseUrl + 'user/signup',
      {name: user.username, email: user.email, password: user.password},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})});
  }

  signin(email: string, password: string) {
    return this.http.post(this.baseUrl + 'user/signin',
      {email: email, password: password},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})})
      .pipe(map(
        (data: any) => {
        //   console.log(response.json());
          const token = data = JSON.parse(data).token;
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          return {token: token, decoded: JSON.parse(window.atob(base64))};
        }
      ))
      ,tap(
        (tokenData:any) => {
          localStorage.setItem('token',  JSON.parse(tokenData).token);
        }
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
