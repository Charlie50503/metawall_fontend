import { ConfigService } from 'src/app/services/config.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators'
import { httpResponse } from '../interfaces/http.interface';
import { user } from '../interfaces/user.interface';
import API_LIST from '../services/api/api-list';
import { post } from '../interfaces/post.interface';
import { PostListService } from '../services/post-list.service';

@Injectable()
export class AllPostResolver implements Resolve<any>{
  constructor(
    private http: HttpClient,
    private configService:ConfigService,
    private postListService:PostListService
    ) {
  }
  resolve(): Observable<post[]> {
    return this.postListService.getAllPost("-1")
  }

}
