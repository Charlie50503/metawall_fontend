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

@Injectable()
export class MainResolver implements Resolve<any>{
  constructor(
    private http: HttpClient,
    private configService:ConfigService
    ) {
  }

  resolve(): Observable<user> {
    return this.http.get<httpResponse>(API_LIST.GET.USER_PROFILE(this.configService.id))
      .pipe(
        map(response => response.data)
      )
  }
}
