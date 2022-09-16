import { Component, OnInit, SimpleChanges } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
import { ConfigService } from 'src/app/services/config.service';
import { UserImgUrlService } from 'src/app/services/user-img-url.service';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {
  userProfile:user = this.configService.userProfile;
  userImgUrl = this.userImgUrlService.setUserImgUrl(this.userProfile.avatar,this.userProfile.sex)

  constructor(
    private configService:ConfigService,
    private userImgUrlService:UserImgUrlService
  ) { }

  ngOnInit(): void {

  }
}
