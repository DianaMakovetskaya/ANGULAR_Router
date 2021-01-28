import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './components/UserPackage/users/users.component';
import {PostsComponent} from './components/PostPackage/posts/posts.component';
import {UserComponent} from './components/UserPackage/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserResolveService} from './services/resolve/user-resolve.service';
import { FullUserComponent } from './components/UserPackage/full-user/full-user.component';
import {PostResolveService} from './services/resolve/post-resolve.service';
import { PostComponent } from './components/PostPackage/post/post.component';
import { FullPostComponent } from './components/PostPackage/full-post/full-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    FullUserComponent,
    PostComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'users', component: UsersComponent, resolve: {userData: UserResolveService}, children: [{
        path: ':id', component: FullUserComponent
      }]

    },
      {
        path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService}, children: [{
          path: ':id', component: FullPostComponent
        }]
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
