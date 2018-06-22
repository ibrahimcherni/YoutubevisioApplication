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

  bookmarkList() {

    return this.youtubevisioservice.getListBookmarks();

  }



}
