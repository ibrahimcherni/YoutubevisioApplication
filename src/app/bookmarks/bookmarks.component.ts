import { Component, OnInit } from '@angular/core';
import { YoutubevisioService } from '../youtubevisio.service';
import {s} from '@angular/core/src/render3';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor( private youtubevisioservice : YoutubevisioService) { }


  bookmarkslist: Array<string> = [];


  ngOnInit() {
    this.bookmarkslist = this.youtubevisioservice.getListBookmarks();
  }

}
