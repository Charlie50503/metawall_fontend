import { Component, OnInit } from '@angular/core';
import { follow } from 'src/app/interfaces/follow.interface';
import { ConfigService } from 'src/app/services/config.service';
import { FollowService } from 'src/app/services/follow.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  followList:Array<follow> = [];
  constructor(
    private followService: FollowService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.getFollowList()
  }

  getFollowList(){
    this.followService.getFollowing(this.configService.id).subscribe(data=>{
      console.log(data.following);
      this.followList = data.following
    })
  }

}
