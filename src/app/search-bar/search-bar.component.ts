import { Component, OnInit } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  link: string = '';



  constructor(private youtubevisioservice: YoutubevisioService ) { }

  ngOnInit() {

  }

  onSubmit() {

    console.log(' ici j"ai appuyé submit ',this.link);
    this.youtubevisioservice.setUrl(this.link);
    this.youtubevisioservice.addUrl(this.link);
    console.log('liste des urls ', this.youtubevisioservice.getListedesurls().reverse());

  }

  addToBookmarks(link: string ) {

    this.youtubevisioservice.addToBoockmarks(link);
    console.log(this.youtubevisioservice.getListBookmarks());

  }

  showBookmarksList(){


  }



}
