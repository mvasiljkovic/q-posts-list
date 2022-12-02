import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ApiService } from './services/api/api.service';
import { StateService } from './services/state/state.service';
import { LoaderService } from './services/loader.service';
import { LoadingInterceptor } from './interceptors/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    PostListComponent,
    CommentListComponent,
    SpinnerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService, 
    StateService, 
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
