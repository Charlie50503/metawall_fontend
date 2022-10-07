import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { PostListService } from 'src/app/services/post-list.service';
import { user } from 'src/app/interfaces/user.interface';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postList!: post[];
  subscription = new Subscription();
  constructor(
    private postListService: PostListService,
    private route: ActivatedRoute,
  ) { }

  userProfile!: user;

  ngOnInit(): void {
    this.route.data.subscribe(
      {
        next: (data: any) => {
          this.postListService.setPostList(data.postList);
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
    this.init()
  }

  init() {
    this.postList = this.postListService.postList
    this.addInitSubscribe()
  }
  addInitSubscribe() {
    this.subscription = this.postListService.postListChanged.subscribe(newPostList => {
      this.postList = newPostList
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
