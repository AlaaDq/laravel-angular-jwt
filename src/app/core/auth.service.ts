import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError,retry,tap } from 'rxjs/operators';

import {  IToken,IAuth} from '../../app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    baseUrl: string = 'http://localhost:8000/api/';
    authStatus:boolean=false;
    constructor(private http: HttpClient) { }

    
    
  signup(username: string, email: string, password: string,password_confirmation:string) {
    return this.http.post(this.baseUrl + 'user/signup',
      {name: username, email: email, password:password,password_confirmation:password_confirmation},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})});
  }

  signin(email: string, password: string):Observable<IAuth> {
    
    return this.http.post<IToken>(this.baseUrl + 'user/signin',
      {email: email, password: password},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})})
    .pipe(map((response:IToken)=>{
        const token = response.token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return {token: token, decoded: JSON.parse(window.atob(base64))};
    }))
 
    
    
  }

 
  getToken() {
    const s= localStorage.getItem('token');
    const ob=JSON.parse(s);
    return ob!=null ? ob.token:null;
  }

  isAuth(){
    return this.getToken()!=null? true:false;
  }
}
