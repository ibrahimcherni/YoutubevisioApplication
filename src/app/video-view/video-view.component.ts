import { Component, OnInit , DoCheck } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';
import { DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, convertToParamMap} from '@angular/router';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit, DoCheck {


  url: string;

  constructor(private youtubevisioservice: YoutubevisioService , private sanitizer: DomSanitizer , private route : ActivatedRoute ) {





    }





  ngDoCheck() {



  }
  ngOnInit() {

    this.route.paramMap
      .subscribe( Params => { console.log(Params); } ) ;

  }

  urlEntry () {

    if ( this.youtubevisioservice.getUrl() === '' )  { return false ; }
    else { return true ;}

  }

  constuireUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'.concat(this.youtubevisioservice.getReference()));
  }




}


