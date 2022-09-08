import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-user-profile',
  templateUrl: './post-user-profile.component.html',
  styleUrls: ['./post-user-profile.component.scss']
})
export class PostUserProfileComponent implements OnInit {
  @Input() postUserProfilePhotoClass: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
