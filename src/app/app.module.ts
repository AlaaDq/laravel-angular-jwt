import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// import { QuotesModule } from './quotes/quotes.module';
// import { AuthModule } from './auth/auth.module';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,   // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule,  // Shared (multi-instance) objects
    // QuotesModule,
    // AuthModule,//last module has notfound route
    AppRoutingModule,

    TranslateModule.forRoot(
        {
            loader:
            {
             provide:TranslateLoader,
             useFactory:(http:HttpClient) => { return new TranslateHttpLoader(http,'./../assets/i18n','.json'); },
             deps:[HttpClient]
            }
            
        }
    ),
    BrowserAnimationsModule,
    MatSnackBarModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
