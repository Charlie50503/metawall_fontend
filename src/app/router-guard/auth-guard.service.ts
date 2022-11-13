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
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private authService: AuthService,
    private toastService: ToastService) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated().pipe(
      catchError((err, caught) => {
        this.toastService.setWarningToastMessage("驗證失敗");
        return of(this.router.navigate(["/login"]))
      }),
      map((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          this.toastService.setWarningToastMessage("驗證失敗");
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
