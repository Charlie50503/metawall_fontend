import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { user } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private _id: string = "";
  private _config: any;
  private _userProfile!: user;
  private _userImgUrl!:string;
  get id() { return this._id; }
  get config() { return this._config; }
  get userProfile() { return this._userProfile; }
  get userImgUrl() { return this._userImgUrl; }

  userProfileChanged = new Subject<user>();

  constructor(
    ) { }

  setId(id:string){
    this._id = id
  }
  setUserProfile(userProfile:user){
    this._userProfile = userProfile
    this.userProfileChanged.next(this._userProfile)
  }
  setUserImgUrl(userImgUrl:string){
    this._userImgUrl = userImgUrl
  }
}
