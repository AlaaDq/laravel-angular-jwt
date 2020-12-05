import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: '/signin'},
    { path: '', component:HomeComponent},
    { path: 'quotes', loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule)},
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    { path: '**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
