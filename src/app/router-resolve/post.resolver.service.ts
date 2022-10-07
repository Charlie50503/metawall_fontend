import { ConfigService } from 'src/app/services/config.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs';
import { post } from '../interfaces/post.interface';
import { PostListService } from '../services/post-list.service';

@Injectable()
export class PostResolver implements Resolve<any>{
  constructor(
    private postListService:PostListService,
    ) {
  }
  resolve(route:ActivatedRouteSnapshot): Observable<post> {
    const postId = route.paramMap.get("postId") || "";
    return this.postListService.getOnePost(postId)
  }

}
