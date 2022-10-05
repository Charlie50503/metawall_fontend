import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signUpBody } from 'src/app/interfaces/request/sign-up';
import { ConfigService } from 'src/app/services/config.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  get nickName() : FormControl {
    return this.signUpForm.get("nickName") as FormControl;
  }
  get email() : FormControl {
    return this.signUpForm.get("email") as FormControl;
  }
  get password() : FormControl {
    return this.signUpForm.get("password") as FormControl;
  }
  get confirmPassword() : FormControl {
    return this.signUpForm.get("confirmPassword") as FormControl;
  }

  @Output() isSignIn = new EventEmitter<boolean>();
  signUpForm: FormGroup = new FormGroup({
    nickName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required,Validators.minLength(8),Validators.pattern(/[a-zA-Z]/)]),
    confirmPassword: new FormControl("", [Validators.required,Validators.minLength(8),Validators.pattern(/[a-zA-Z]/)]),
  });

  errorMessage = "";
  constructor(
    private loginService:LoginService,
    private configService:ConfigService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }

  signUp(){
    const parmas:signUpBody = {
      nickName:this.signUpForm.value["nickName"],
      email:this.signUpForm.value["email"],
      password:this.signUpForm.value["password"],
      confirmPassword:this.signUpForm.value["confirmPassword"],
    }
    this.loginService.signUp(parmas).subscribe({
      next:(data)=>{
        localStorage.setItem("metawall-token",data.token)
        this.configService.setId(data._id)
        this.router.navigate(["/main/all-post"])
      },
      error:(error)=>{
        this.errorMessage = error.message
      }
    })
  }
  goSignInPage(){
    this.isSignIn.emit(true)
  }
}
