import { DatetimeFormatService } from './../../services/datetime-format.service';
import { PostUserProfileService } from './../../services/post-user-profile.service';
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
    this._createdAt = this.datetimeFormatService.datetimeFormat(createdAt,"yyyy/MM/dd H:m") || ""
  }
  @Input() set creator(creator:post["creator"]){
    this._imgUrl = this.postUserProfileService.setUserImgUrl(creator.avatar,creator.sex)
  }

  public _imgUrl!:string;
  public _createdAt!:string;
  public imgUrl:string = "";

  constructor(
    private postUserProfileService:PostUserProfileService,
    private datetimeFormatService:DatetimeFormatService
  ) { }

  ngOnInit(): void {
  }
}
