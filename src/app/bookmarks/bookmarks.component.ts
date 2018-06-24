import { Component, OnInit } from '@angular/core';
import { YoutubevisioService } from '../youtubevisio.service';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor( private youtubevisioservice: YoutubevisioService ) { }





  ngOnInit() {



  }
// this function is called when the user clicks on the bookmark list button

  bookmarkList() {

    return this.youtubevisioservice.getListBookmarks();

  }



}
