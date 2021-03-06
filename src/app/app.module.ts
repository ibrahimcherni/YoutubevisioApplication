import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { YoutubevisioService} from './youtubevisio.service';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'video/:id',
    component: VideoViewComponent },
  {
    path: 'bookmarks/listedesbookmarks',
    component : BookmarksComponent
  },
  {
    path: '**',
    component : VideoViewComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoViewComponent,
    HistoryComponent,
    BookmarksComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [YoutubevisioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
