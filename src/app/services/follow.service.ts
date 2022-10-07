import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { following } from '../interfaces/follow.interface';
import { httpResponse } from '../interfaces/http.interface';
import { getFollowResponse } from '../interfaces/response/get-follow';
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
  ): Observable<getFollowResponse> {
    return this.http.get<httpResponse>(API_LIST.GET.FOLLOWING(userId)).pipe(
      map(response => response.data)
    )
  }
}
