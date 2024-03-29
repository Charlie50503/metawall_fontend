import { ToastService } from './../../services/toast.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { DatetimeFormatService } from 'src/app/services/datetime-format.service';
import { LikeService } from 'src/app/services/like.service';
import { UserImgUrlService } from 'src/app/services/user-img-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like-user',
  templateUrl: './like-user.component.html',
  styleUrls: ['./like-user.component.scss']
})
export class LikeUserComponent implements OnInit {
  @Input() postId!:string;
  @Input() set createdAt(createdAt:post["createdAt"]){
    this.createdDatetime = this.datetimeFormatService.datetimeFormat(createdAt,"yyyy/MM/dd H:m") || ""
  }
  @Input() set creator(creator:post["creator"]){
    this.imgUrl = this.userImgUrlService.setUserImgUrl(creator.avatar,creator.sex)
    this.nickName = creator.nickName
    this.creatorId = creator._id
  }

  @Output() updateLikeList: EventEmitter<any> = new EventEmitter();
  public creatorId!:string;
  public imgUrl!:string;
  public createdDatetime!:string;
  public nickName!:string;
  constructor(
    private userImgUrlService:UserImgUrlService,
    private datetimeFormatService:DatetimeFormatService,
    private likeService:LikeService,
    private toastService:ToastService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  deleteLike(){
    this.likeService.deleteLike(this.postId).subscribe((data)=>{
      this.toastService.setSuccessToastMessage("刪除成功")
      this.updateLikeList.emit()
    })
  }

  goViewPost(){
    this.router.navigate(["/main/post",this.postId])
  }

  goPersonalPostPage(){
    this.router.navigate(["/main/person-post",this.creatorId])
  }
}
