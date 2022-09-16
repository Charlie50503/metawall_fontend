import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userProfile = this.configService.userProfile;
  userImgUrl = this.configService.userImgUrl;
  constructor(
    private configService:ConfigService
  ) { }

  ngOnInit(): void {
  }

}
