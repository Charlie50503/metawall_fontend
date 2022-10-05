import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signInBody } from 'src/app/interfaces/request/sign-in';
import { ConfigService } from 'src/app/services/config.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required,Validators.minLength(8)]),
  });

  @Output() isSignUp = new EventEmitter<boolean>();
  errorMessage:string = "";
  constructor(
    private loginService:LoginService,
    private configService:ConfigService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }


  signIn() {
    const parmas:signInBody = {
      email:this.signInForm.value["email"],
      password:this.signInForm.value["password"]
    }
    this.loginService.signIn(parmas).subscribe({
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

  goSignUpPage(){
    this.isSignUp.emit(true);
  }
}

