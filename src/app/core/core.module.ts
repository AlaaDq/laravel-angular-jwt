import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from './data.service';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[DataService,AuthService]
})
export class CoreModule { }
