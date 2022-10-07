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
  _following!: following;

  followingChanged = new Subject<following>();
  get following() {
    return this._following
  }
  constructor(
    private http: HttpClient
  ) { }

  setUer(following: following) {
    this._following = following
    this.followingChanged.next(this._following)
  }

  public getFollowing(
    userId: string
  ): Observable<followResponse> {
    return this.http.get<httpResponse>(API_LIST.GET.FOLLOWING(userId)).pipe(
      map(response => response.data)
    )
  }

  public addFollowing(
    userId: string
  ): Observable<followResponse> {
    return this.http.post<httpResponse>(API_LIST.POST.FOLLOWING(userId),null).pipe(
      map(response => response.data)
    )
  }
}
