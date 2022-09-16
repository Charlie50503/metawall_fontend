import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable } from 'rxjs';
import 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsResolver implements Resolve<any>{
    constructor(private http: HttpClient) {
    }

    resolve(): Observable<any> {
        return this.http.get<any>('/user/profile/6322cd14b48b514e1f3f16a8').pipe(
          map(response => response.data)
        )
    }
}
