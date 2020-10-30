import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { QuotesModule } from './quotes/quotes.module';
import { AuthModule } from './auth/auth.module';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    QuotesModule,
    AuthModule,//last module has notfound route
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot(
        {
            loader:
            {
             provide:TranslateLoader,
             useFactory:(http:HttpClient) => { return new TranslateHttpLoader(http,'./../assets/i18n','.json'); },
             deps:[HttpClient]
            }
            
        }
    )
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
