import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {AuthService} from './auth.service';

import { IQuote } from '../../app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   
    baseUrl: string = 'http://localhost:8000/api/';

    constructor(private http: HttpClient, private authService: AuthService) { }

    
addQuote(content: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: content});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post( this.baseUrl + 'quote?token=' + token, body, {headers: headers})
  }

  getQuotes(): Observable<IQuote[]> {
    return this.http.get<IQuote[]>( this.baseUrl + 'quotes')
    // .pipe(map(quotes => {          
    //      return quotes.filter((cust: IQuote) => cust.id === 1);
    // }))
    .pipe(
        catchError(this.handleError)
    );
  }

  updateQuote(id: number, newContent: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: newContent});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<IQuote>( this.baseUrl + 'quote/' + id + '?token=' + token, body, {headers: headers})
 
  }

  deleteQuote(id: number) {
    const token = this.authService.getToken();
    return this.http.delete( this.baseUrl + 'quote/' + id + '?token=' + token);
  }



  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }

}
