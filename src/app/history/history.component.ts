import { Component, OnInit } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  listedesurl: Array<string> = [];



  constructor( private youtubevisioservice: YoutubevisioService ) {

    console.log('hello from console historique', this.youtubevisioservice.getListedesurlsFromdatabase());





  }

  ngOnInit() {

  }







  stockerUrl() {


    return this.youtubevisioservice.getListdesurls();

  }



  getReference(url: string) {
    this.youtubevisioservice.setUrl(url);
    return this.youtubevisioservice.getReference();
  }


  clickOK(url: string) {
    this.youtubevisioservice.setUrl(url);

  }



}
