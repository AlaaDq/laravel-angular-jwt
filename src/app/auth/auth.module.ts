import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

console.log('AuthModule loaded');

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,AuthRoutingModule,SharedModule
  ],
})
export class AuthModule { }
