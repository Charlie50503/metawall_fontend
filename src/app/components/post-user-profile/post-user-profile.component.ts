import { DatetimeFormatService } from './../../services/datetime-format.service';
import { UserImgUrlService } from '../../services/user-img-url.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
@Component({
  selector: 'app-post-user-profile',
  templateUrl: './post-user-profile.component.html',
  styleUrls: ['./post-user-profile.component.scss']
})
export class PostUserProfileComponent implements OnInit {
  @Input() postUserProfilePhotoClass: string = "";
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
