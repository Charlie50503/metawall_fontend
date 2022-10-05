import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignInPage = true;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  isSignUp(){
    this.isSignInPage = false
  }

  isSignIn(){
    this.isSignInPage = true
  }
}
