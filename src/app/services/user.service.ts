import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { user } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userProfile = null;
  getProfileEnd$:Observable<any> = new Observable<any>(observer=>{
      observer.next();
  });
  constructor(private http: HttpClient) { }

  public getProfile(
  ): void {
    const URL = '/user/profile/6322cd14b48b514e1f3f16a8';
    this.http.get<httpResponse>(URL).pipe(
      map(response => response.data)
    ).subscribe(payload => {
      this.setUserProfile(payload)
    })
  }

  //去丟請求
  // 取得到請求

  private doGetProfile(){
    // return concat(this.getProfile,this.getProfileEnd$)
  }

  private setUserProfile(payload: user) {
    this.userProfile = payload
  }

  public getUserProfile() {
    return this.userProfile
  }
}
