import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { AuthGuardService } from '../core/auth-guard.service';
import { BeforeRouteLeaveGuardService } from '../core/before-route-leave-guard.service';

const routes: Routes = [
    { path: 'index',canActivate:[AuthGuardService], component: QuotesComponent },
    { path: 'create', component: CreateQuoteComponent ,canDeactivate:[BeforeRouteLeaveGuardService]},
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class QuotesRoutingModule {

}