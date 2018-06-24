import { Component, OnInit } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {


  constructor( private youtubevisioservice: YoutubevisioService ) {

    this.youtubevisioservice.getListedesurlsFromdatabase();

  }

  ngOnInit() {

  }


  historyList() {

    const url = this.youtubevisioservice.getUrl();
    return this.youtubevisioservice.getUrlList(url);

  }


  watchVideo(url: string) {
    this.youtubevisioservice.setUrl(url);
  }

}
