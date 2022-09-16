import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { comment } from '../interfaces/comment.interface';
import { httpResponse } from '../interfaces/http.interface';
import { commentCreateBody } from '../interfaces/request/comment-create';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public postCommentCreate(postId: string,body:commentCreateBody
  ): Observable<comment> {
    return this.http.post<httpResponse>(API_LIST.POST.COMMENT_CREATE(postId),body).pipe(
      map(response => response.data)
    );
  }

}
