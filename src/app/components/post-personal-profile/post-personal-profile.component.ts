import { UserImgUrlService } from 'src/app/services/user-img-url.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/interfaces/user.interface';
import { FollowService } from 'src/app/services/follow.service';
import { following } from 'src/app/interfaces/follow.interface';

@Component({
  selector: 'app-post-personal-profile',
  templateUrl: './post-personal-profile.component.html',
  styleUrls: ['./post-personal-profile.component.scss']
})
export class PostPersonalProfileComponent implements OnInit {
  user!: user;
  imgUrl = "";
  nickName: string = "";
  following: following = [];
  constructor(
    private userService: UserService,
    private followService: FollowService,
    private userImgUrlService: UserImgUrlService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get("userId") || "";
    this.userService.userChanged.subscribe(newUser => {
      this.user = newUser
      this.imgUrl = this.userImgUrlService.setUserImgUrl(this.user.avatar, this.user.sex)
    })
    this.followService.followingChanged.subscribe(newFollowing => {
      this.following = newFollowing
    })
    this.userService.getUserProfile(userId).subscribe(user => {
      this.user = user
      this.imgUrl = this.userImgUrlService.setUserImgUrl(this.user.avatar, this.user.sex)
    })
    this.followService.getFollowing(userId).subscribe(data => {
      if (data.following) {
        this.following = data.following
      }
    })
  }

}
