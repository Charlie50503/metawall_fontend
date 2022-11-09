import { Injectable } from '@angular/core';
import { user } from '../interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})

export class UserImgUrlService {
  defaultUserImgUrl = {
    male: "assets/male-face.svg",
    female: "assets/female-face.svg",
  }
  constructor() { }

  setUserImgUrl(userImgUrl: string, sex: user["sex"]) {
    if (userImgUrl !== "") return userImgUrl
    if (sex === "male") {
      return this.defaultUserImgUrl[sex]
    } else {
      return this.defaultUserImgUrl[sex]
    }
  }
}
