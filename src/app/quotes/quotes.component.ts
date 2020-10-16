import { Component, OnInit } from '@angular/core';
import {DataService} from '../core/data.service';
import {IQuote} from '../shared/interfaces';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes: IQuote[];

 constructor(private quoteService: DataService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quotes: IQuote[]) => {
        this.quotes = quotes;
      }); 
  }

  onDeleted(quote: IQuote) {
        //delete from server side
        this.quoteService.deleteQuote(quote.id)
        .subscribe((res: any) => {
                console.log(res)
                //delete from client side
                const position = this.quotes.findIndex(
                    (quoteEl: IQuote) => {
                    return quoteEl.id == quote.id;
                    }
                );
                this.quotes.splice(position, 1);
        }); 
  }

}
