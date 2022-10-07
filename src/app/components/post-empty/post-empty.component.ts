import { PostListService } from 'src/app/services/post-list.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-empty',
  templateUrl: './post-empty.component.html',
  styleUrls: ['./post-empty.component.scss']
})
export class PostEmptyComponent implements OnInit {
  emptyMessage:string = "目前尚無動態，新增一則貼文吧！";

  constructor(
    private postListService:PostListService
  ) { }

  ngOnInit(): void {
    this.postListService.postEmptyMessageChanged.subscribe(newPostEmptyMessage=>{
      this.emptyMessage = newPostEmptyMessage
    })
  }
}
