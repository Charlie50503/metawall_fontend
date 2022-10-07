import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { following } from '../interfaces/follow.interface';
import { httpResponse } from '../interfaces/http.interface';
import { followResponse } from '../interfaces/response/follow';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private http: HttpClient
  ) { }

  public getFollowing(
    userId: string
  ): Observable<followResponse> {
    return this.http.get<httpResponse>(API_LIST.GET.FOLLOWING(userId)).pipe(
      map(response => {
        if(response.status!=="success") {
          throw new Error(response.message);
        }
        return response.data
      })
    )
  }

  public addFollowing(
    userId: string
  ): Observable<followResponse> {
    return this.http.post<httpResponse>(API_LIST.POST.FOLLOWING(userId),null).pipe(
      map(response => {
        if(response.status!=="success") {
          throw new Error(response.message);
        }
        return response.data
      })
    )
  }
  public deleteFollowing(
    userId: string
  ): Observable<followResponse> {
    return this.http.delete<httpResponse>(API_LIST.POST.FOLLOWING(userId)).pipe(
      map(response => {
        if(response.status!=="success") {
          throw new Error(response.message);
        }
        return response.data
      })
    )
  }
}
