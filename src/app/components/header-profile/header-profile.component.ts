import { Subscription } from 'rxjs';
import { Component, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user.interface';
import { ConfigService } from 'src/app/services/config.service';
import { UserImgUrlService } from 'src/app/services/user-img-url.service';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit, OnDestroy {
  userProfile: user = this.configService.userProfile;
  userImgUrl: string = this.configService.userImgUrl;

  isShowNavigatorDropDown = false;

  subscription = new Subscription();
  constructor(
    private configService: ConfigService,
    private router: Router,
    private userImgUrlService: UserImgUrlService
  ) { }

  ngOnInit(): void {
    this.subscription = this.configService.userProfileChanged.subscribe(newUserProfile=>{
      this.userProfile = newUserProfile
      this.userImgUrl =  this.userImgUrlService.setUserImgUrl(newUserProfile.avatar, newUserProfile.sex)
    })
  }

  goUserProfile() {
    this.router.navigate(["/main/personal-profile"])
    this.isShowNavigatorDropDown = false
  }
  goPersonPost() {
    this.router.navigate(["/main/owner-post",this.configService.id])
    this.isShowNavigatorDropDown = false
  }
  logout() {
    localStorage.removeItem("metawall-token")
    this.router.navigate(["/login"])
    this.isShowNavigatorDropDown = false
  }

  toggleNavigatorDropDown() {
    this.isShowNavigatorDropDown = !this.isShowNavigatorDropDown
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
