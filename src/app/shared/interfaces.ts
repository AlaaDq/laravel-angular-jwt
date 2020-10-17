// export interface Interfaces {
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
    