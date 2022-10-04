import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { httpResponse } from 'src/app/interfaces/http.interface';
import API_LIST from '../api/api-list';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  public isAuthenticated(
    ): Observable<boolean> {
      return this.http.get<httpResponse>(API_LIST.GET.CHECK_IS_USER).pipe(
        map(response => {
          if(response.status!=="success") {
            throw new Error(response.message);
          }
          return true
        })
      );
    }
}
