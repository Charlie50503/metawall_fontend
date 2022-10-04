import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // token:string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjU4ZmFiYjU1OGI4NDhmN2JmZmY5OCIsImlhdCI6MTY2NDg1OTI5MSwiZXhwIjoxNjY1NDY0MDkxfQ.Qy6OCTI_xiM0GdehVe5mSe1kSuLrLMCYz6mMksjYU1E`;
  token:string = "";
  apiURL:string = environment.apiURL;

  constructor(
    private router: Router
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = localStorage.getItem("token") || "";

    request = request.clone({
      url:`${this.apiURL}${request.url}`,
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      }
    });

    return next.handle(request)
  }
}
