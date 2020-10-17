import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from "../../core/auth.service";
import { IAuth } from 'src/app/shared/interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    return: string = '';
    constructor(private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute
                ) { }

    ngOnInit() {
    }
  
    onSignin(form: NgForm) {
      this.authService.signin(form.value.email, form.value.password)
        .subscribe(
          tokenData => 
        {console.log(tokenData),
        localStorage.setItem('token',JSON.stringify(tokenData))
        localStorage.setItem('decoded',JSON.stringify(tokenData.decoded))
        this.return='quotes'
        this.router.navigateByUrl(this.return);
        },
        error => console.log(error)
        );
    }
}
