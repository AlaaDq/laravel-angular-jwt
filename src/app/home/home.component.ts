import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit  {
    supportedLangs=['en','fr','ar'];
    authState$:BehaviorSubject<boolean>;

    constructor(private translateService:TranslateService  ,private authService:AuthService  )
    {
        this.authState$ =this.authService.authStatus$;
        console.log(this.authState$);
        this.translateService.addLangs(this.supportedLangs);
        this.translateService.setDefaultLang('en');
  
      //   const browserLang=this.translateService.getBrowserLang();
      //   this.translateService.use(browserLang);
    }

    ngOnInit(): void {
    }
  

    changeLang(lang:string){
      this.translateService.setDefaultLang(lang);
    }

    signOut(){
        this.authService.signOut();
    }


}
