import { Component, Input, OnInit } from '@angular/core';
import { comment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!:comment;
  constructor() { }

  ngOnInit(): void {
  }

}
