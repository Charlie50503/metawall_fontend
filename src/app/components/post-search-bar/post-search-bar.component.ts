import { PostListService } from 'src/app/services/post-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-search-bar',
  templateUrl: './post-search-bar.component.html',
  styleUrls: ['./post-search-bar.component.scss']
})
export class PostSearchBarComponent implements OnInit {

  searchKeyword:string = "";
  sort:string = "-1";
  constructor(
    private postListService:PostListService
  ) { }

  ngOnInit(): void {
  }

  doSearch(){
    if(this.searchKeyword===""){
      this.postListService.getAllPost(this.sort)
    }else{
      this.postListService.searchPost(this.searchKeyword,this.sort)
    }
  }
}
