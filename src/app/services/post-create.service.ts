import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { createPostBody } from '../interfaces/request/create-post';
import { createPostResponse } from '../interfaces/response/create-post';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})
export class PostCreateService {

  constructor(private http: HttpClient) { }

  public createPost(body:createPostBody
    ): Observable<createPostResponse> {
      return this.http.post<httpResponse>(API_LIST.POST.CREATE_POST,body).pipe(
        map(response => {
          if(response.status!=="success") {
            throw new Error(response.message);
          }
          return response.data
        })
      )
    }
}
