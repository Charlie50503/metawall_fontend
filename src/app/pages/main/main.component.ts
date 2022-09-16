import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userProfile:any;
  constructor(
    private route:ActivatedRoute
  ) { }
  posts:any;
  async ngOnInit(): Promise<void> {
    this.route.data.subscribe((data: any) => {
      this.posts = data.posts;
    })
  }

}
