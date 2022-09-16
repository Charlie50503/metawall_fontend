import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, map, Observable } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { post } from '../interfaces/post.interface';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})

export class PostListService {
  private _postList!: post[];
  get postList() { return this._postList; }

  constructor(private http: HttpClient) { }

  public async getAllPost(sort:string
    ): Promise<void> {
      this._postList = await lastValueFrom(this.http.get<httpResponse>(API_LIST.GET.ALL_POST(sort)).pipe(
        map(response => response.data)
      ))
    }

  public async searchPost(keyword: string,sort:string
  ): Promise<void> {
    this._postList = await lastValueFrom(this.http.get<httpResponse>(API_LIST.GET.SEARCH_POST(keyword,sort)).pipe(
      map(response => response.data)
    ))
  }

}
