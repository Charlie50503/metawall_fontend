import { Subscription } from 'rxjs';
import { ConfigService } from './../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { UserImgUrlService } from 'src/app/services/user-img-url.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userProfile: user = this.configService.userProfile;
  subscription = new Subscription;
  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private userImgUrlService: UserImgUrlService
  ) { }
  ngOnInit(): void {
    this.subscription = this.configService.userProfileChanged.subscribe(userProfile=>{
      this.userProfile = userProfile
    })
    this.route.data.subscribe(
      {
        next: (data: any) => {
          this.configService.setUserProfile(data.userProfile);
          this.configService.setUserImgUrl(this.userImgUrlService.setUserImgUrl(data.userProfile.avatar, data.userProfile.sex))
        },
        error: (error) => {
          console.log(error);

        }
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
