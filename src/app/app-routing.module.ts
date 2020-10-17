import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/quotes'},
    // { path: '**', pathMatch: 'full', redirectTo: '/quotes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
