import { Injectable } from '@angular/core';
import { post } from '../interfaces/post.interface';
@Injectable({
  providedIn: 'root'
})

// type sex = "male" | "female"

export class PostUserProfileService {
  defaultUserImgUrl = {
    male: "/assets/male-face.svg",
    female: "/assets/female-face.svg",
  }
  constructor() { }

  setUserImgUrl(userImgUrl: string, sex: post["creator"]["sex"]) {
    if (userImgUrl !== "") return userImgUrl
    if (sex === "male") {
      return this.defaultUserImgUrl[sex]
    } else {
      return this.defaultUserImgUrl[sex]
    }
  }
}