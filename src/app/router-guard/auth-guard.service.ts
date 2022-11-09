import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  UrlTree,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated().pipe(
      catchError((err, caught) => {
        return of(this.router.navigate(["/login"], { queryParams: { status:"error", toastMessage: "驗證失敗" } }))
      }),
      map((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          return this.router.parseUrl('/login');
        }
      }),
    );
  }

  // canActivateChild(): Observable<boolean | UrlTree> {
  //   return this.authService.isAuthenticated().pipe(
  //     map((authenticated) => {
  //       if (authenticated) {
  //         return true;
  //       } else {
  //         return this.router.parseUrl('/');
  //       }
  //     })
  //   );
  // }

  // canLoad(): Observable<boolean | UrlTree> {
  //   return this.authService.isAuthenticated().pipe(
  //     map((authenticated) => {
  //       if (authenticated) {
  //         return true;
  //       } else {
  //         return this.router.parseUrl('/');
  //       }
  //     })
  //   );
  // }
}
