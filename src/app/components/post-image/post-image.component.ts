import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {
  @Input() imgUrl!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
