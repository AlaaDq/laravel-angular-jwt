import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';

const routes: Routes = [
    { path: 'quotes', component: QuotesComponent },
    { path: 'create-quote', component: CreateQuoteComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class QuotesRoutingModule {

}