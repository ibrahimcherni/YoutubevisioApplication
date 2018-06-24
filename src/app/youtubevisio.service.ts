import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError , map , tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubevisioService implements OnInit {


  url: string = ''; // url que l'utilisateur va mettre dans la searchbar
  reference: string = '';  //une réference de la video youtube
  urllist: Array<string> = []; // liste des urls
  bookmarklist: Array<string> = []; // liste des bookmarks


  constructor(private http: HttpClient) {}


  ngOnInit() {}


  getFromDatabase(): Observable<any> {

    return this.http.get('http://localhost:8000/api/history');

  }

  postToDatabase(url: string): Observable<any> {

    return this.http.post<string>('http://localhost:8000/api/addHistory', url);
  }


  getUrl() {

    return this.url;
  }


  setUrl(url: string) {

    this.url = url;
  }


// fonction pour avoir la réference de la video youtube à partir de l'url

  getReference() {

    this.reference = this.url.substring(this.url.indexOf('=') + 1, this.url.length);
    return this.reference;

  }





  // ajouter url à la liste des urls

  addUrl(url: string) {


      if ((this.urllist.indexOf(url) < 0) && (url !== '')) {
        this.urllist = [].concat(this.urllist, url);
      }
      if ( this.urllist.indexOf(url) > 0 ) {
        this.getUrlList(url);
      }

  }


  addToBoockmarks(bookmark: string) {

    if ((this.bookmarklist.indexOf(bookmark) < 0) && (bookmark !== '')) {
      this.bookmarklist = [].concat(this.bookmarklist, bookmark);
    }


  }





  getListBookmarks() {

    return this.bookmarklist;
  }


  getListedesurlsFromdatabase() {

    console.log('getting url')
    let i = 0;
    this.getFromDatabase().subscribe((data: any) => {
      const segment = data.slice(1, data.length - 1).split('},{');

      const charlist: string[] = [];
      segment.map(el => {
        if (segment.length === 1) {

        } else {
          i = i + 1;
          if (i === 1) {

            el = el + '}';

          }
          else if (i === segment.length) {
            el = '{' + el;
          } else {

            el = '{' + el + '}';
          }
        }
        charlist.push(el);

      }),

        charlist.forEach(i => {

          this.addUrl(JSON.parse(i).url);


        });


    });


  }


  getUrlList( link: string ) {

    let c: string;

    if ( this.urllist.indexOf(link) > 0 ) {

      for ( let _i = this.urllist.indexOf(link); _i > 0 ; _i--) {

        c = this.urllist[_i];
        this.urllist[_i]=this.urllist[_i - 1];
        this.urllist[_i - 1] = c;

      }
    }

    return this.urllist;



  }

}













