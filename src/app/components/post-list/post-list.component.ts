import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { PostListService } from 'src/app/services/post-list.service';
import { user } from 'src/app/interfaces/user.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

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
    private configService: ConfigService,
    private route: ActivatedRoute,
    public router: Router
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

  isShowPostPersonalProfile() {
    if (!this.router.url.startsWith('/main/person-post')) { return false }
    if (this.configService.id === this.route.snapshot.paramMap.get("userId")) { return false }
    return true
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
