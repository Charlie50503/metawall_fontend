import { PersonalProfileComponent } from './../../components/personal-profile/personal-profile.component';
import { LikeListComponent } from './../../components/like-list/like-list.component';
import { PostEditComponent } from './../../components/post-edit/post-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingComponent } from 'src/app/components/following/following.component';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { MainComponent } from './main.component';
import { PostsResolver } from 'src/app/router/router';

const routes: Routes = [
  {
    path: "main", component: MainComponent,
    resolve:{
      posts:PostsResolver
    },
    children: [
      { path: 'all-post', component: PostListComponent },
      { path: 'following', component: FollowingComponent },
      { path: 'post-edit', component: PostEditComponent },
      { path: 'like-list', component: LikeListComponent },
      { path: 'personal-profile', component: PersonalProfileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    PostsResolver
  ]
})
export class MainRoutingModule { }
