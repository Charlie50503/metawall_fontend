import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { PostListService } from 'src/app/services/post-list.service';
import { user } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postList!:post[];
  constructor(
    private postListService:PostListService,
  ) { }

    userProfile!:user;

  ngOnInit(): void {
    this.initApi()
  }

  async initApi(){
    await this.postListService.getAllPost()
    this.postList = this.postListService.postList
  }
}
