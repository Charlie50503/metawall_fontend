import { PostListService } from 'src/app/services/post-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-search-bar',
  templateUrl: './post-search-bar.component.html',
  styleUrls: ['./post-search-bar.component.scss']
})
export class PostSearchBarComponent implements OnInit {

  searchKeyword: string = "";
  sort: string = "-1";
  constructor(
    private postListService: PostListService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  doSearch() {
    if (this.router.url === "/main/all-post"){
      this.searchAllPost()
    }
    if(this.router.url.startsWith("/main/person-post")){
      this.searchPersonPost()
    }
  }

  searchAllPost() {
    if (this.searchKeyword === "") {
      this.postListService.getAllPost(this.sort).subscribe(postList => {
        this.postListService.setPostList(postList)
        if(this.isPostListEmpty(postList)){
          this.setPostEmptyMessage()
        }
      })
    } else {
      this.postListService.searchAllPost(this.searchKeyword, this.sort).subscribe(postList => {
        this.postListService.setPostList(postList)
        if(this.isPostListEmpty(postList)){
          this.setPostEmptyMessage()
        }
      })
    }
  }
  searchPersonPost() {
    const targetUserId = this.route.snapshot.params["userId"]

    if (this.searchKeyword === "") {
      this.postListService.getPersonPost(targetUserId, this.sort).subscribe(postList => {
        this.postListService.setPostList(postList)
        if(this.isPostListEmpty(postList)){
          this.setPostEmptyMessage()
        }
      })
    } else {
      this.postListService.searchPersonPost(targetUserId,this.searchKeyword, this.sort).subscribe(postList => {
        this.postListService.setPostList(postList)
        if(this.isPostListEmpty(postList)){
          this.setPostEmptyMessage()
        }
      })
    }
  }

  isPostListEmpty(postList:post[]){
    return postList.length===0
  }

  setPostEmptyMessage(){
    this.postListService.setPostEmptyMessage("沒有找到搜尋的貼文！")
  }

}
