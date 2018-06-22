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



  }

  ngOnInit() {

    this.listedesurl = this.youtubevisioservice.getListedesurls();




  }





}
