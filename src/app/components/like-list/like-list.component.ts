import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { ConfigService } from 'src/app/services/config.service';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {
  posts:post[] = []
  constructor(
    private configService:ConfigService,
    private likeService:LikeService
  ) { }

  ngOnInit(): void {
    this.getLikeList()
  }

  getLikeList(){
    this.likeService.getLikeList(this.configService.id).subscribe((data)=>{
      this.posts = data
    })
  }
}
