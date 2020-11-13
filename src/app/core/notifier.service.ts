import { Injectable } from '@angular/core';
import { MatSnackBar } from  '@angular/material/snack-bar';;

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar :MatSnackBar) { }
  
  showNotification(message:string,btntext:string,status:'success'|'error'){
      //we can use openfromcomponent to custoize the template of notification but then we will need calling dismiss func on button
      this.snackBar.open(message,btntext,{
          duration:3500,
          horizontalPosition:"right",
          verticalPosition:"top",
          panelClass:status,// defined in glabal style
      })
  }
}
