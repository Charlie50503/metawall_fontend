import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';
import { user } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postList!:Array<post>;
  constructor(
    private postService:PostService,
  ) { }

    userProfile!:user;

  ngOnInit(): void {
    this.initApi()
  }

  initApi(){
    this.postService.getAllPost().subscribe(payload=>{
      console.log(payload);
      this.postList = payload
    })
  }
}
