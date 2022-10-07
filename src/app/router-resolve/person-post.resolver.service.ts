import { ConfigService } from 'src/app/services/config.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { post } from '../interfaces/post.interface';
import { PostListService } from '../services/post-list.service';

@Injectable()
export class PersonPostResolver implements Resolve<any>{
  constructor(
    private postListService:PostListService
    ) {
  }
  resolve(): Observable<post[]> {
    const userId = this.postListService.targetUserId;
    return this.postListService.getPersonPost(userId)
  }

}
