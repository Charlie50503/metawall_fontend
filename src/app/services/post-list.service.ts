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
  postEmptyMessageChanged = new Subject<string>();
  private _postList!: post[];
  private _postEmptyMessage:string = "";
  get postList() { return this._postList; }
  get postEmptyMessage() { return this._postEmptyMessage; }

  constructor(private http: HttpClient) { }

  public setPostList(postList: post[]) {
    this._postList = postList
    this.postListChanged.next(this._postList)
  }

  public setPostEmptyMessage(postEmptyMessage: string) {
    this._postEmptyMessage = postEmptyMessage
    this.postEmptyMessageChanged.next(this._postEmptyMessage)
  }


  public getAllPost(sort: string
  ): Observable<post[]> {
    return this.http.get<httpResponse>(API_LIST.GET.ALL_POST(sort)).pipe(
      map(response => response.data)
    )
  }

  public getPersonPost(
    userId: string,
    sort:string
    ): Observable<post[]> {
      return this.http.get<httpResponse>(API_LIST.GET.PERSON_POST(userId,sort)).pipe(
        map(response => response.data)
      )
    }
  public searchPersonPost(
    userId: string,
    keyword:string,
    sort:string
    ): Observable<post[]> {

      return this.http.get<httpResponse>(API_LIST.GET.SEARCH_PERSON_POST(userId,keyword,sort)).pipe(
        map(response => response.data)
      )
    }

  public searchAllPost(keyword: string, sort: string
  ): Observable<post[]> {
    return this.http.get<httpResponse>(API_LIST.GET.SEARCH_POST(keyword, sort)).pipe(
      map(response => response.data)
    )
  }


}
