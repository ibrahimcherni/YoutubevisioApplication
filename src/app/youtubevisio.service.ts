import { Injectable, OnInit } from '@angular/core';
import {assertNumber} from '@angular/core/src/render3/assert';


@Injectable({
  providedIn: 'root'
})
export class YoutubevisioService implements OnInit{




  ngOnInit()  {

  }

  constructor(){
    console.log('Heloooo from constructor');

  }

  url: string = ''; // url que l'utilisateur va mettre dans la searchbar
  reference : string = '';  //une réference de la video youtube
  listedesurl: Array<string> = []; // liste des urls
  listedesbookmarks : Array<string> = []; // liste des bookmarks


  setUrl(url: string) {

    this.url = url;
  }

  getUrl() {

    return this.url;
  }
// fonction pour avoir la réference de la video youtube à partir de l'url

  getReference() {

    this.reference = this.url.substring(this.url.indexOf('=') + 1 , this.url.length);
    return this.reference;

  }
  // ajouter url à la liste des urls

  addUrl( url: string) {

    if ((this.listedesurl.indexOf(url) < 0) && (url !== '')) {
      this.listedesurl = [].concat(this.listedesurl, url);
    }
  }


  addToBoockmarks( bookmark: string ) {

    if ((this.listedesbookmarks.indexOf( bookmark ) < 0) && ( bookmark !== '')) {
      this.listedesbookmarks = [].concat(this.listedesbookmarks, bookmark);
    }


  }


  getListBookmarks() {

    return this.listedesbookmarks;
  }



  /* permutation(a: string , b: string ) {

    let c: string;

    c = b;
    b = a;
    a=  c;
  } */


  getListedesurls () {


    return this.listedesurl;

    //if ( this.listedesurl.indexOf(e) > 0 ) {

    //  for ( let _i = this.listedesurl.indexOf(e) ; _i >= 0 ; _i--) {

     //   this.permutation(this.listedesurl[_i], this.listedesurl[_i - 1]);

    // }


   // }
   // return this.listedesurl;

  }


}

