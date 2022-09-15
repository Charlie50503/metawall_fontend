import { environment } from './../../../environments/environment.prod';
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
  token:string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDZjNmZiZWQ1OGQ3MTA5OTZkNzYwMyIsImlhdCI6MTY2MzIxNTU2MCwiZXhwIjoxNjYzODIwMzYwfQ.lkPex7XUe_Z_b9SXbOfY1M67vYTODbLhh9IZoq0GjLw`;
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
