import { ToastService } from '../../services/toast.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signInBody } from 'src/app/interfaces/request/sign-in';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required,Validators.minLength(8)]),
  });
  constructor(
    private loginService:LoginService,
    private configService:ConfigService,
    private toastService:ToastService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const parmas:signInBody = {
      email:this.loginForm.value["email"],
      password:this.loginForm.value["password"]
    }
    this.loginService.signIn(parmas).subscribe({
      next:(data)=>{
        localStorage.setItem("token",data.token)
        this.configService.setId(data._id)
        this.router.navigate(["/main/all-post"])
      },
      error:(error)=>{
        this.toastService.setWarningToastMessage(error.message)
      }
    })
  }
}
