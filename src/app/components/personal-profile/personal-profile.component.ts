import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
import { ConfigService } from 'src/app/services/config.service';
import { UserImgUrlService } from 'src/app/services/user-img-url.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {
  user!:user;
  avatar!:string;
  isDisplayTab:{ [key: string]: boolean } = {
    personalProfileEdit:true,
    personalProfileChangePassword:false
  }
  constructor(
    private userService:UserService,
    private userImgUrlService:UserImgUrlService,
    private configService:ConfigService
  ) { }

  ngOnInit(): void {

    this.userService.getUserProfile(this.configService.id).subscribe(user => {
      this.user = user
      this.avatar = this.userImgUrlService.setUserImgUrl(this.user.avatar, this.user.sex)
    })
  }

  toggleIsDisplayTab(targetKey:string){
    this.isDisplayTab['isPersonalProfileChangePassword'] = true
    this.isDisplayTab['isPersonalProfileEdit'] = false
    for (const [key, value] of Object.entries(this.isDisplayTab)) {
      if(key===targetKey){
        this.isDisplayTab[key]=true
      }else{
        this.isDisplayTab[key]=false
      }
    }
  }
}
