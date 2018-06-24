import { Component, OnInit } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  link: string = '';  //to save the link typed in the searchbar

  constructor(private youtubevisioservice: YoutubevisioService , private router: Router) {}

  ngOnInit() {}

// this function is called when the button watch is clicked : this function has 3 functions :
  // to set the url that the user typed in the search bar
  // to sent the url to the database(backend)
  // to add the url in the localstorage
  onSubmit() {
    this.router.navigate(['/']);
    this.youtubevisioservice.setUrl(this.link);
    this.youtubevisioservice.postToDatabase(this.link).subscribe(data => console.log(data));
    this.youtubevisioservice.addUrl(this.link);

  }

// this function is called when the button add to boomarks is clicked to add the url into the bookmarklist
  addToBookmarks( ) {
    this.youtubevisioservice.addToBoockmarks(this.link);


  }






}
