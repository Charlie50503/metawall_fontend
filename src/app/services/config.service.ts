import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { user } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private _config: any;
  private _userProfile!: user;
  get config() { return this._config; }
  get userProfile() { return this._userProfile; }

  constructor(private http: HttpClient) { }

  async load(): Promise<void> {
    this._userProfile = await lastValueFrom(this.http.get<httpResponse>('/user/profile/6322cd14b48b514e1f3f16a8')
      .pipe(
        map(response => response.data)
      ))
  }
}
