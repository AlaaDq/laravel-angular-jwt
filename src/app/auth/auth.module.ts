import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,AuthRoutingModule,FormsModule,ReactiveFormsModule
  ],
  exports:[FormsModule,ReactiveFormsModule]
})
export class AuthModule { }
