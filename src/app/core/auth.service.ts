import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { map, catchError,retry,tap } from 'rxjs/operators';

import {  IToken,IAuth} from '../../app/shared/interfaces';


import { BehaviorSubject, Observable } from 'rxjs';


export interface IAuthService {
    readonly authStatus$: BehaviorSubject<boolean>
    signup(username: string, email: string, password: string,password_confirmation:string) 
    signin(email: string, password: string):Observable<IAuth> 
    // updateAuthStatus(state: boolean): void
    getToken()

  }



@Injectable({
  providedIn: 'root'
})




export class AuthService {
    baseUrl: string = 'http://localhost:8000/api/';
    readonly authStatus$ = new BehaviorSubject<boolean>(this.isAuth());

    constructor(private http: HttpClient) { }

    public updateAuthStatus(state: boolean): void  {
          this.authStatus$.next(state)
          console.log("authstatus$"+state)
    }

    
  signup(username: string, email: string, password: string,password_confirmation:string) {
    return this.http.post(this.baseUrl + 'user/signup',
      {name: username, email: email, password:password,password_confirmation:password_confirmation},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})});
  }

  signin(email: string, password: string):Observable<IAuth> {
    
    return this.http.post<IToken>(this.baseUrl + 'user/signin',
      {email: email, password: password},
      {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})})
    .pipe(
    tap((response:IToken)=>{let currentState= response.token ? true:false;this.updateAuthStatus(currentState);}),

    map((response:IToken)=>{
        const token = response.token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return {token: token, decoded: JSON.parse(window.atob(base64))};
    }
    )
    
    )
    
  }

  signOut(){
      localStorage.removeItem('token');
      this.updateAuthStatus(false);
  }

 
  getToken() {
    const s= localStorage.getItem('token');
    const ob=JSON.parse(s);
    return ob!=null ? ob.token:null;
  }

  isAuth(){
      return this.getToken()!=null? true:false;
      // return this.authStatus$.getValue();
  }

}
