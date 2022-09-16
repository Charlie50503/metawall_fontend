import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/interfaces/post.interface';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!:post;

  userProfile = this.configService.userProfile;
  userImgUrl = this.configService.userImgUrl
  ary = [1,2]
  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
  }


}
