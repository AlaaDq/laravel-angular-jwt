import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
//   template: `<router-outlet></router-outlet>`
})

export class AppComponent {
  title = 'ngfronted';
  supportedLangs=['en','fr','ar'];
  constructor(private translateService:TranslateService    )
  {
      this.translateService.addLangs(this.supportedLangs);
      this.translateService.setDefaultLang('en');

    //   const browserLang=this.translateService.getBrowserLang();
    //   this.translateService.use(browserLang);
  }
  changeLang(lang:string){
    this.translateService.setDefaultLang(lang);
  }

}
