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
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    //     'key': 'x-api-key',
    //   })
    // }
    // const URL = 'http://localhost:3000/post/all-post';
    // return this.http.get<any>(URL,httpOptions);
    return this.http.get<httpResponse>(API_LIST.GET.ALL_POST).pipe(
      map(response=>response.data)
    );
  }

}
