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

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if(this.postList!==this.postListService.postList){
      this.postList = this.postListService.postList
    }
  }

  async initApi(){
    await this.postListService.getAllPost("-1")
  }
}
