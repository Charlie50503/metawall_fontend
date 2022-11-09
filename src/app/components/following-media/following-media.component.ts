import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { follow } from 'src/app/interfaces/follow.interface';
import { DatetimeFormatService } from 'src/app/services/datetime-format.service';
import { UserImgUrlService } from 'src/app/services/user-img-url.service';

@Component({
  selector: 'app-following-media',
  templateUrl: './following-media.component.html',
  styleUrls: ['./following-media.component.scss']
})
export class FollowingMediaComponent implements OnInit {
  followDateTime = "";
  _follow!: follow;
  imgUrl!:string;
  followingCountDate!: number;
  @Input() set follow(follow: follow) {
    this.followDateTime = this.datetimeFormatService.datetimeFormat(follow.createdAt, "yyyy/MM/dd H:m") || ""
    this._follow = follow
    this.imgUrl = this.userImgUrlService.setUserImgUrl(this._follow.user.avatar,this._follow.user.sex);
    this.followingCountDate = Math.floor(this.datetimeFormatService.getDateDifference(new Date(follow.createdAt), new Date()));
  };
  constructor(
    private userImgUrlService: UserImgUrlService,
    private datetimeFormatService: DatetimeFormatService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goPersonalPostPage(){
    this.router.navigate(["/main/person-post",this._follow.user._id])
  }

}
