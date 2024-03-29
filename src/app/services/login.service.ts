import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { signInBody } from '../interfaces/request/sign-in';
import { signUpBody } from '../interfaces/request/sign-up';
import { signInResponse } from '../interfaces/response/sign-in';
import { signUpResponse } from '../interfaces/response/sign-up';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public signIn(body: signInBody
  ): Observable<signInResponse> {
    return this.http.post<httpResponse>(API_LIST.POST.SIGN_IN, body).pipe(
      map(response => {
        if (response.status !== "success") {
          throw new Error(response.message);
        }
        return response.data
      })
    );
  }

  public signUp(body: signUpBody
  ): Observable<signUpResponse> {
    return this.http.post<httpResponse>(API_LIST.POST.SIGN_UP, body).pipe(
      map(response => {
        if (response.status !== "success") {
          throw new Error(response.message);
        }
        return response.data
      })
    );
  }
}
