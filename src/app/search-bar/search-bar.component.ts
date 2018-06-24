import { Component, OnInit } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  link: string = '';
  listedesurl: Array<string> = [];



  constructor(private youtubevisioservice: YoutubevisioService , private router: Router) {


  }

  ngOnInit() {


  }


  onSubmit() {
    this.router.navigate(['/'])
    console.log(' ici j"ai appuyé submit ', this.link);
    this.youtubevisioservice.setUrl(this.link);
    this.youtubevisioservice.addUrl(this.link);


  }




  addToBookmarks( ) {
    this.youtubevisioservice.addToBoockmarks(this.link);
    console.log(this.youtubevisioservice.getListBookmarks());

  }






}
