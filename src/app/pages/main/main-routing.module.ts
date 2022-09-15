import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: "main", component: MainComponent,
  children: [
    { path: 'all-post', component: PostListComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
