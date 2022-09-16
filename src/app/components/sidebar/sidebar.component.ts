import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private configService:ConfigService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  linkToPostEdit(){
    this.router.navigate(["/main/post-edit"])
  }
  linkToFollowing(){
    this.router.navigate(["/main/following"])
  }
  linkToLikeList(){
    this.router.navigate(["/main/like-list"])
  }

  linkToPersonalProfile(){
    this.router.navigate(["/main/personal-profile"])
  }

}
