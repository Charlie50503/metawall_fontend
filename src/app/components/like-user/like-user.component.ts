import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { DatetimeFormatService } from 'src/app/services/datetime-format.service';
import { UserImgUrlService } from 'src/app/services/user-img-url.service';

@Component({
  selector: 'app-like-user',
  templateUrl: './like-user.component.html',
  styleUrls: ['./like-user.component.scss']
})
export class LikeUserComponent implements OnInit {
  @Input() set createdAt(createdAt:post["createdAt"]){
    this.createdDatetime = this.datetimeFormatService.datetimeFormat(createdAt,"yyyy/MM/dd H:m") || ""
  }
  @Input() set creator(creator:post["creator"]){
    this.imgUrl = this.userImgUrlService.setUserImgUrl(creator.avatar,creator.sex)
    this.nickName = creator.nickName
  }

  public imgUrl!:string;
  public createdDatetime!:string;
  public nickName!:string;
  constructor(
    private userImgUrlService:UserImgUrlService,
    private datetimeFormatService:DatetimeFormatService
  ) { }

  ngOnInit(): void {
  }

}
