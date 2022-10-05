import { MainModule } from './pages/main/main.module';
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
import { CommentComponent } from './components/comment/comment.component';
import { MobileNavigatorBarComponent } from './components/mobile-navigator-bar/mobile-navigator-bar.component';
import { PostPersonalProfileComponent } from './components/post-personal-profile/post-personal-profile.component';
import { PostEmptyComponent } from './components/post-empty/post-empty.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowingMediaComponent } from './components/following-media/following-media.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { MainHeaderPrimaryComponent } from './components/main-header-primary/main-header-primary.component';
import { PostImageComponent } from './components/post-image/post-image.component';
import { LikeListComponent } from './components/like-list/like-list.component';
import { LikeUserComponent } from './components/like-user/like-user.component';
import { PersonalProfileComponent } from './components/personal-profile/personal-profile.component';
import { PersonalProfileEditComponent } from './components/personal-profile-edit/personal-profile-edit.component';
import { PersonalProfileChangePasswordComponent } from './components/personal-profile-change-password/personal-profile-change-password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/http/http.interceptor.service';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarningToastComponent } from './components/warning-toast/warning-toast.component';
import { SuccessToastComponent } from './components/success-toast/success-toast.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

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
    PostListComponent,
    CommentComponent,
    MobileNavigatorBarComponent,
    PostPersonalProfileComponent,
    PostEmptyComponent,
    FollowingComponent,
    FollowingMediaComponent,
    PostEditComponent,
    MainHeaderPrimaryComponent,
    PostImageComponent,
    LikeListComponent,
    LikeUserComponent,
    PersonalProfileComponent,
    PersonalProfileEditComponent,
    PersonalProfileChangePasswordComponent,
    WarningToastComponent,
    SuccessToastComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
