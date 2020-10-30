// export interface Interfaces {

import { Observable } from 'rxjs';

// }
export interface IQuote {
    content: string;
    id: number;
  }
export interface IQuoteresponse {
    quotes: IQuote[];
  }

  export interface IUser {
    username: string;
    email: string;
    password: string;
  }

  export interface IToken {
    token: string;
  }
  export interface IAuth {
    token: string;
    decoded:JSON;
  }

    export interface ICanComponentDeactivate{
        canDeactivate:()=> Observable<boolean>|Promise<boolean>|boolean;
    }