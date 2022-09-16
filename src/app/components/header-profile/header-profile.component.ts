import { Component, OnInit, SimpleChanges } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {
  userProfile:user = this.configService.userProfile;
  userImgUrl:string = this.configService.userImgUrl;

  constructor(
    private configService:ConfigService,
  ) { }

  ngOnInit(): void {

  }
}
