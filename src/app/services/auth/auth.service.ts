import { Router, RouterModule } from '@angular/router';
import { ConfigService } from './../config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { httpResponse } from 'src/app/interfaces/http.interface';
import API_LIST from '../api/api-list';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router : Router,
    private configService: ConfigService
  ) { }

  public isAuthenticated(
  ): Observable<boolean> {
    return this.http.get<httpResponse>(API_LIST.GET.CHECK_IS_USER).pipe(
      map(response => {
        if (response.status !== "success") {
          return this.router.navigate(["/login"])
        }
        return response.data._id
      }),
      tap(id => this.configService.setId(id)),
      tap(_ => true)
    );
  }
}
