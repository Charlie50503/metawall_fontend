import { WarningToastService } from './../../services/warning-toast.service';
import { LikeService } from './../../services/like.service';
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
  @Input() post!: post;

  userProfile = this.configService.userProfile;
  userImgUrl = this.configService.userImgUrl;

  commentMessage: string = "";
  constructor(
    private configService: ConfigService,
    private commentService: CommentService,
    private likeService: LikeService,
    private warningToastService: WarningToastService
  ) { }

  ngOnInit(): void {
  }

  sendComment() {
    const body: commentCreateBody = {
      comment: this.commentMessage
    }
    this.commentService.postCommentCreate(this.post._id, body).subscribe(payload => {
      console.log(payload);
      this.updatePostComment(payload.comment)
      this.cleanCommentMessage()
    })
  }

  updatePostComment(comment: comment | any) {
    this.post.comments.push(comment)
  }

  cleanCommentMessage() {
    this.commentMessage = ""
  }

  toggleLike() {
    console.log(this.post.likes.some(userProfile=>{
        console.log(userProfile._id,this.userProfile._id);

      return userProfile._id===this.userProfile._id
      }
    ));

    if(!this.post.likes.some(userProfile=>userProfile._id===this.userProfile._id)){
      this.likeService.addLike(this.post._id).subscribe(
        {
          next: data => {

            this.post = data.post
          },
          error: error => {
            this.warningToastService.setWarningToastMessage(error.message)
          }
        }
      )
    }else {
      this.likeService.deleteLike(this.post._id).subscribe(
        {
          next: data => {
            this.post = data.post
          },
          error: error => {
            this.warningToastService.setWarningToastMessage(error.message)
          }
        }
      )
    }

  }
}
