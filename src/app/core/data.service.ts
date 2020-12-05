import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {AuthService} from './auth.service';

import { IQuote,IQuoteresponse } from '../../app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   
    baseUrl: string = 'http://localhost:8000/api/';
    constructor(private http: HttpClient, private authService: AuthService) { }

    
addQuote(content: string) {
    const body = JSON.stringify({content: content});
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':  "Bearer " + this.authService.getToken() });
    return this.http.post( this.baseUrl + 'quote', body, {headers: headers})
  }

  getQuotes(): Observable<IQuoteresponse> {
      const headers = new HttpHeaders({'Authorization':  "Bearer " + this.authService.getToken() });
      return this.http.get<IQuoteresponse>( this.baseUrl + 'quotes',{headers: headers})
      .pipe(
          catchError(this.handleError)
      );

    // return this.http.get<IQuoteresponse>( this.baseUrl + 'quotes?token='+this.authService.getToken())
    // .pipe(map(quotes => {          
    //      return quotes.filter((cust: IQuote) => cust.id === 1);
    // }))
  }

  updateQuote(id: number, newContent: string) {
    const body = JSON.stringify({content: newContent});
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':  "Bearer " + this.authService.getToken() });
    return this.http.put<IQuote>( this.baseUrl + 'quote/' + id, body, {headers: headers})
  }

  deleteQuote(id: number) {
    const headers = new HttpHeaders({'Authorization':  "Bearer " + this.authService.getToken() });
    return this.http.delete( this.baseUrl + 'quote/' + id ,{headers: headers});
  }



  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }

}
