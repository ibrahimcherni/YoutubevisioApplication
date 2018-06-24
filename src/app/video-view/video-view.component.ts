import { Component, OnInit , DoCheck } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';
import { DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({

  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit, DoCheck {



  constructor(private youtubevisioservice: YoutubevisioService , private sanitizer: DomSanitizer , private route: ActivatedRoute ) {}

  ngDoCheck() {}
  ngOnInit() {}

  // this function is called when the user search for the url ( or when he clicks watch) this function
  // has to build the url with by pass security


  buildUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'.concat(this.youtubevisioservice.getReference()));
  }




}


