import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { post } from '../interfaces/post.interface';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  public getAllPost(
  ): Observable<post[]> {
    return this.http.get<httpResponse>(API_LIST.GET.ALL_POST).pipe(
      map(response=>response.data)
    );
  }

}
