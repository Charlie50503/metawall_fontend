import { UserImgUrlService } from 'src/app/services/user-img-url.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/interfaces/user.interface';
import { FollowService } from 'src/app/services/follow.service';
import { following } from 'src/app/interfaces/follow.interface';
import { ToastService } from 'src/app/services/toast.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-post-personal-profile',
  templateUrl: './post-personal-profile.component.html',
  styleUrls: ['./post-personal-profile.component.scss']
})
export class PostPersonalProfileComponent implements OnInit {
  user!: user;
  imgUrl = "";
  nickName: string = "";
  targetFollowing: following = [];
  ownerFollowing: following = [];

  isShowFollowBtn = true;
  constructor(
    private userService: UserService,
    private followService: FollowService,
    private userImgUrlService: UserImgUrlService,
    private configService:ConfigService,
    private toastService:ToastService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get("userId") || "";
    this.userService.userChanged.subscribe(newUser => {
      this.user = newUser
      this.imgUrl = this.userImgUrlService.setUserImgUrl(this.user.avatar, this.user.sex)
    })
    this.followService.followingChanged.subscribe(newFollowing => {
      this.targetFollowing = newFollowing
    })
    this.userService.getUserProfile(userId).subscribe(user => {
      this.user = user
      this.imgUrl = this.userImgUrlService.setUserImgUrl(this.user.avatar, this.user.sex)
    })
    this.followService.getFollowing(userId).subscribe(data => {
      console.log("data",data);

      if (data?.following) {
        this.targetFollowing = data.following
      }else {
        this.targetFollowing = []
      }
    })
    this.followService.getFollowing(this.configService.id).subscribe(data => {
      console.log("data",data);

      if (data.following) {

        this.ownerFollowing = data.following
        console.log("this ownerFollowing",this.ownerFollowing);
      }
    })
  }

  addFollowing(){
    this.followService.addFollowing(this.user._id).subscribe({
      next:data=>{
        this.ownerFollowing = data.following
        this.toastService.setSuccessToastMessage("添加成功")
      },
      error:error=>{
        this.toastService.setWarningToastMessage(error.message)
      }
    })
  }

  deleteFollowing(){
    this.followService.deleteFollowing(this.user._id).subscribe({
      next:data=>{
        this.ownerFollowing = data.following
        this.toastService.setSuccessToastMessage("已取消追蹤")
      },
      error:error=>{
        this.toastService.setWarningToastMessage(error.message)
      }
    })
  }

  checkShowFollowBtn(){
    console.log("ownerFollowing",this.ownerFollowing);
    console.log("this.user._id",this.user?._id);
    console.log(!this.ownerFollowing.includes(this.user?._id));
    this.isShowFollowBtn = !this.ownerFollowing.includes(this.user?._id)
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.checkShowFollowBtn()
  }

}
