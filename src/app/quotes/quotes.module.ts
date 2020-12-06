import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuotesComponent } from './quotes.component';
import { QuoteComponent } from './quote/quote.component';
import {SharedModule} from '../shared/shared.module';
import {QuotesRoutingModule} from './quotes-routing.module';

console.log('QuotesModule loaded');
@NgModule({
    imports: [
        CommonModule,SharedModule,QuotesRoutingModule,
    ],
    declarations: [QuotesComponent, CreateQuoteComponent,QuoteComponent],
})
export class QuotesModule { }
