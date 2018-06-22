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

  onSubmit() { console.log(this.link);
    this.youtubevisioservice.setUrl(this.link);
  }

}
