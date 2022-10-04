import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-navigator-bar',
  templateUrl: './mobile-navigator-bar.component.html',
  styleUrls: ['./mobile-navigator-bar.component.scss']
})
export class MobileNavigatorBarComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  goPostEdit(){
    this.router.navigate(["/main/post-edit"])
  }
  goAllPost(){
    this.router.navigate(["/main/all-post"])
  }
  goFollowList(){
    this.router.navigate(["/main/following"])
  }
  goLikeList(){
    this.router.navigate(["/main/like-list"])
  }

}
