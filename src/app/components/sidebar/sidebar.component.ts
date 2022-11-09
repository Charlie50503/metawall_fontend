import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { user } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userProfile = this.configService.userProfile;

  // userProfile$ = this.configService.userProfile;
  userImgUrl = this.configService.userImgUrl;

  subscription = new Subscription();
  constructor(
    private configService:ConfigService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.configService.userProfileChanged.subscribe(newUserProfile=>{
      this.userProfile = newUserProfile
    })
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
