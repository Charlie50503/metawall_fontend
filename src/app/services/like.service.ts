import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { post } from '../interfaces/post.interface';
import API_LIST from './api/api-list';


interface likeResponse {
  message:string,
  post:post
}

@Injectable({
  providedIn: 'root'
})

export class LikeService {

  constructor(
    private http: HttpClient
  ) { }


  public addLike(postId: string
  ): Observable<likeResponse> {
    const body = ""
    return this.http.post<httpResponse>(API_LIST.POST.ADD_LIKE(postId),body).pipe(
      map(response => {
        if(response.status!=="success") {
          throw new Error(response.message);
        }
        return response.data
      })
    );
  }
  public deleteLike(postId: string
  ): Observable<likeResponse> {
    return this.http.delete<httpResponse>(API_LIST.DELETE.DELETE_LIKE(postId)).pipe(
      map(response => {
        if(response.status!=="success") {
          throw new Error(response.message);
        }
        return response.data
      })
    );
  }

  public getLikeList(userId:string):Observable<post[]>{
    return this.http.get<httpResponse>(API_LIST.GET.LIKE_LIST(userId)).pipe(
      map(response => {
        if(response.status!=="success") {
          throw new Error(response.message);
        }
        return response.data
      })
    );
  }
}
