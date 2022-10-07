import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, map, Observable, Subject } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { post } from '../interfaces/post.interface';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})

export class PostListService {
  postListChanged = new Subject<post[]>();
  private _targetUserId:string = "";
  private _postList!: post[];
  get postList() { return this._postList; }
  get targetUserId() { return this._targetUserId; }

  constructor(private http: HttpClient) { }

  public setPostList(postList: post[]) {
    this._postList = postList
    this.postListChanged.next(this._postList)
  }

  public setTargetUserId(targetUserId: string) {
    this._targetUserId = targetUserId
  }
  public getAllPost(sort: string
  ): Observable<post[]> {
    return this.http.get<httpResponse>(API_LIST.GET.ALL_POST(sort)).pipe(
      map(response => response.data)
    )
  }

  public getPersonPost(userId: string
    ): Observable<post[]> {
      return this.http.get<httpResponse>(API_LIST.GET.PERSON_POST(userId)).pipe(
        map(response => response.data)
      )
    }

  public async searchPost(keyword: string, sort: string
  ): Promise<void> {
    this._postList = await lastValueFrom(this.http.get<httpResponse>(API_LIST.GET.SEARCH_POST(keyword, sort)).pipe(
      map(response => response.data)
    ))
  }


}
