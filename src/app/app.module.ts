import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavBarComponent } from './components/navbar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponentComponent } from './components/github-followers-component/github-followers-component.component';
import { GithubProfileComponentComponent } from './components/github-profile-component/github-profile-component.component';
import { PostsComponentComponent } from './components/posts-component/posts-component.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavBarComponent,
    GithubFollowersComponentComponent,
    GithubProfileComponentComponent,
    PostsComponentComponent,
    NotFoundComponentComponent,
    HomeComponent

  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:username', component: GithubProfileComponentComponent },
      { path: 'followers', component: GithubFollowersComponentComponent},
      { path: 'posts', component: PostsComponentComponent },
      { path: '**', component: NotFoundComponentComponent },

    ])
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
