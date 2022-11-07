import { uploadPasswordResponse } from './../interfaces/response/upload-password';
import { passwordForm } from './../interfaces/password.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { userProfileResponse } from '../interfaces/response/user-profile';
import { user } from '../interfaces/user.interface';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _user!:user;

  userChanged = new Subject<user>();
  get user(){
    return this._user
  }
  constructor(
    private http: HttpClient
  ) { }

  setUer(user:user){
    this._user = user
    this.userChanged.next(this._user)
  }

  public getUserProfile(
    userId:string
    ): Observable<userProfileResponse> {
       return this.http.get<httpResponse>(API_LIST.GET.USER_PROFILE(userId)).pipe(
        map(response => response.data)
      )
    }

  public patchUserProfile(
    user:user
  ): Observable<userProfileResponse>{
    return this.http.patch<httpResponse>(API_LIST.PATCH.USER_PROFILE, user).pipe(
      map(response => response.data)
    )
  }

  public patchUploadPassword(passwordForm:passwordForm): Observable<uploadPasswordResponse>{
    return this.http.patch<httpResponse>(API_LIST.PATCH.UPDATE_PASSWORD, passwordForm).pipe(
      map(response => response.data)
    )
  }
}
