import { Component, OnInit , DoCheck } from '@angular/core';
import { YoutubevisioService} from '../youtubevisio.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit, DoCheck {


  url: string;

  constructor(private youtubevisioservice: YoutubevisioService ) {


  }


  ngDoCheck(){ console.log('yaatik nam ya amine') ;
    if ( this.url !== this.youtubevisioservice.getUrl() ) {

      console.log('yaatik nam ya brhaim ', this.youtubevisioservice.getUrl()) ;

    }

  }
  ngOnInit() {


  }



  getUrl() {


  }
}


