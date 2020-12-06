import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule,
 
  ],
  exports: [ 
    CapitalizePipe ,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class SharedModule { }
