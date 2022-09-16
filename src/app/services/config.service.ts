import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { user } from '../interfaces/user.interface';
import { UserImgUrlService } from './user-img-url.service';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private _config: any;
  private _userProfile!: user;
  private _userImgUrl!:string;
  get config() { return this._config; }
  get userProfile() { return this._userProfile; }
  get userImgUrl() { return this._userImgUrl; }

  constructor(
    private http: HttpClient,
    private userImgUrlService:UserImgUrlService
    ) { }

  async load(): Promise<void> {
    this._userProfile = await lastValueFrom(this.http.get<httpResponse>('/user/profile/6322cd14b48b514e1f3f16a8')
      .pipe(
        map(response => response.data)
      ))
    this._userImgUrl = this.userImgUrlService.setUserImgUrl(this._userProfile.avatar,this._userProfile.sex)
  }
}
