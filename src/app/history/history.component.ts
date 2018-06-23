import { Component, OnInit } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  listedesurl: Array<string> = [];
  lastUpdate = new Date();


  constructor( private youtubevisioservice: YoutubevisioService ) {





  }

  ngOnInit() {


    console.log('hello', this.listedesurl);








  }

  stockerUrl() {

    return this.youtubevisioservice.getListedesurls().reverse();

  }

  getReference(url: string) {
    this.youtubevisioservice.setUrl(url);
    return this.youtubevisioservice.getReference();
  }


  clickOK(url :string) {

    this.youtubevisioservice.setUrl(url);

  }


}
