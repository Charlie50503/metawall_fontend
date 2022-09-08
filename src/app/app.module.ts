import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { PostComponent } from './components/post/post.component';
import { PostSearchBarComponent } from './components/post-search-bar/post-search-bar.component';
import { PostUserProfileComponent } from './components/post-user-profile/post-user-profile.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    HeaderProfileComponent,
    PostComponent,
    PostSearchBarComponent,
    PostUserProfileComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
