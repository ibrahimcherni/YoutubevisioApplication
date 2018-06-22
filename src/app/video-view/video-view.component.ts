import { Component, OnInit , DoCheck } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit, DoCheck {


  url: string;

  constructor(private youtubevisioservice: YoutubevisioService , private sanitizer: DomSanitizer) {


  }


  ngDoCheck() {



  }
  ngOnInit() {

  }

  urlEntry () {

    if ( this.youtubevisioservice.getUrl() === '' )  { return false ; }
    else { return true ;}

  }

  constuireUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'.concat(this.youtubevisioservice.getReference()));
  }




}


