import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubevisioService implements OnInit{

  ngOnInit()  {
    console.log('Heloooo');
  }

  constructor(){
    console.log('Heloooo from constructor');
  }

  url: string = '';


  setUrl(url: string) {

    this.url = url;
  }

  getUrl() {

    return this.url;
  }

}

