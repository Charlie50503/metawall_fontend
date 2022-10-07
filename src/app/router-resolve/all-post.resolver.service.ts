import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { post } from '../interfaces/post.interface';
import { PostListService } from '../services/post-list.service';

@Injectable()
export class AllPostResolver implements Resolve<any>{
  constructor(
    private postListService:PostListService
    ) {
  }
  resolve(): Observable<post[]> {
    return this.postListService.getAllPost("-1")
  }

}
