import { Injectable, OnInit } from '@angular/core';
import {s} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class YoutubevisioService implements OnInit{

  Listedesurl: Array<string> = ['lol'];


  ngOnInit()  {
    console.log('Heloooo');
    this.Listedesurl.concat(this.ho);
  }

  constructor(){
    console.log('Heloooo from constructor');
    console.log(' liste des url ', this.Listedesurl);
  }

  url: string = '';
  reference : string = '';


  setUrl(url: string) {

    this.url = url;
  }

  getUrl() {

    return this.url;
  }

  getReference() {

    this.reference = this.url.substring(this.url.indexOf('=') + 1 , this.url.length);
    return this.reference;

  }

  addUrl( url: string) {

    this.Listedesurl.concat(url);

  }

  getListedesurls() {


    return this.Listedesurl ;
  }


}

