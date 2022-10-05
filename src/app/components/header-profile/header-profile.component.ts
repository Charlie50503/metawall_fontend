import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user.interface';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {
  userProfile: user = this.configService.userProfile;
  userImgUrl: string = this.configService.userImgUrl;

  isShowNavigatorDropDown = false;
  constructor(
    private configService: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  goUserProfile() {
    this.router.navigate(["/main/personal-profile"])
    this.isShowNavigatorDropDown = false
  }
  goPersonPost() {
    // this.router.navigate(["/main/personal-profile"])
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
}
