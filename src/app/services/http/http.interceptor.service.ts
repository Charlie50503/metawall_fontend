import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token:string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjJjZDE0YjQ4YjUxNGUxZjNmMTZhOCIsImlhdCI6MTY2MzIzODkzOCwiZXhwIjoxNjYzODQzNzM4fQ.Tv_AeJSo68snokhVavmFmDKco9Ovqjk2YHsw-heebCU`;
  apiURL:string = environment.apiURL;

  constructor(
    // public auth: AuthService
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      url:`${this.apiURL}${request.url}`,
      setHeaders: {
        // Authorization: `Bearer ${this.auth.getToken()}`
        Authorization: `Bearer ${this.token}`,
      }
    });

    return next.handle(request);
  }
}
