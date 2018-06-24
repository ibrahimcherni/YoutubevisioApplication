import { Component, OnInit } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {


  constructor( private youtubevisioservice: YoutubevisioService ) {

    this.youtubevisioservice.getListedesurlsFromdatabase(); // call in the constructor to call for the history from the database

  }

  ngOnInit() {

  }

// this fonction built to call for the history list

  historyList() {

    const url = this.youtubevisioservice.getUrl();
    return this.youtubevisioservice.getUrlList(url);

  }

// this function built to watch video when the user clicks on url from the history

  watchVideo(url: string) {
    this.youtubevisioservice.setUrl(url);
  }

}
