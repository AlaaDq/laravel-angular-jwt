import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  return: string = '';
  registrationForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
        this.registrationForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          password: ['',[Validators.required, Validators.minLength(6)]],
          confirmPassword: ['',Validators.required],
          email: ['',[Validators.required,Validators.email]],       
        }, { validator: PasswordValidator });
  }

  //for using in template in shortcut way with validations
  get name()  {
    return this.registrationForm.get('name');
  }
  get email()  {
    return this.registrationForm.get('email');
  }
  get password()  {
    return this.registrationForm.get('password');
  }


  get f(){
    return this.registrationForm.value;
  }

  onSignup() {

    this.authService.signup(this.f.name,this.f.email,this.f.password,this.f.confirmPassword)
      .subscribe(
        response => 
        {console.log(response)
            this.return='signin';
            this.router.navigateByUrl(this.return);
        },
        error => console.log(error)
      );
  }

}