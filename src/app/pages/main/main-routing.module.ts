import { PersonalProfileComponent } from './../../components/personal-profile/personal-profile.component';
import { LikeListComponent } from './../../components/like-list/like-list.component';
import { PostEditComponent } from './../../components/post-edit/post-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowingComponent } from 'src/app/components/following/following.component';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { MainComponent } from './main.component';
import { AuthGuard } from 'src/app/router-guard/auth-guard.service';
import { MainResolver } from 'src/app/router-resolve/main.resolver.service';
import { AllPostResolver } from 'src/app/router-resolve/all-post.resolver.service';
import { PersonPostResolver } from 'src/app/router-resolve/person-post.resolver.service';

const routes: Routes = [
  {
    path: "main",
    redirectTo: "main/all-post"
  },
  {
    path: "main", component: MainComponent,
    canActivate: [AuthGuard],
    resolve: {
      userProfile: MainResolver
    },
    children: [
      { path: 'all-post', component: PostListComponent,
        resolve: {
          postList: AllPostResolver
        },
      },
      { path: 'person-post/:userId', component: PostListComponent,
        resolve: {
          postList: PersonPostResolver
        },
      },
      { path: 'following', component: FollowingComponent },
      { path: 'post-edit', component: PostEditComponent },
      { path: 'like-list', component: LikeListComponent },
      { path: 'personal-profile', component: PersonalProfileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
