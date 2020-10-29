import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
//   providers:[DataService,AuthService]  becuse it already provided in root level it still work
})
export class CoreModule { }
