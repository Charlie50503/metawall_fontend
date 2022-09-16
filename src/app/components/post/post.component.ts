import { CommentService } from './../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { ConfigService } from 'src/app/services/config.service';
import { commentCreateBody } from 'src/app/interfaces/request/comment-create';
import { comment } from 'src/app/interfaces/comment.interface';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!:post;

  userProfile = this.configService.userProfile;
  userImgUrl = this.configService.userImgUrl;

  commentMessage:string = "";
  ary = [1,2]
  constructor(
    private configService: ConfigService,
    private commentService:CommentService
  ) { }

  ngOnInit(): void {
  }

  sendComment(){
    const body:commentCreateBody = {
      comment:this.commentMessage
    }
    this.commentService.postCommentCreate(this.post._id,body).subscribe(payload=>{
      console.log(payload);
      this.updatePostComment(payload.comment)
      this.cleanCommentMessage()
    })
  }

  updatePostComment(comment:comment | any){
    this.post.comments.push(comment)
  }

  cleanCommentMessage(){
    this.commentMessage = ""
  }
}
