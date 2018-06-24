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
  listedesurl: Array<string> = []; // liste des urls
  listedesbookmarks: Array<string> = []; // liste des bookmarks


  constructor(private http: HttpClient) {
    console.log('Heloooo from constructor');


  }


  ngOnInit() {


  }


  getFromDatabase(): Observable<any> {

    return this.http.get('http://localhost:8000/api/history');

  }

  postToDatabase(url: string): Observable<any> {

    return this.http.post<string>('http://localhost:8000/api/addHistory', url);
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

    if ((this.listedesurl.indexOf(url) < 0) && (url !== '')) {
      this.listedesurl = [].concat(this.listedesurl, url);
    }
  }


  addToBoockmarks(bookmark: string) {

    if ((this.listedesbookmarks.indexOf(bookmark) < 0) && (bookmark !== '')) {
      this.listedesbookmarks = [].concat(this.listedesbookmarks, bookmark);
    }


  }


  getListdesurls() {


    return this.listedesurl;
  }


  getListBookmarks() {

    return this.listedesbookmarks;
  }


  getListedesurlsFromdatabase() {

    console.log('getting url')
    let i = 0;
    let test: Array<string> = [];


    this.getFromDatabase().subscribe((data: any) => {
      let arr = data.slice(1, data.length - 1).split('},{');

      let f: string[] = [];
      arr.map(el => {
        if (arr.length === 1) {

        } else {
          i = i + 1;
          if (i === 1) {

            el = el + '}';

          }
          else if (i === arr.length) {
            el = '{' + el;
          } else {

            el = '{' + el + '}';
          }
        }
        f.push(el);

      }),

        f.forEach(k => {

          this.addUrl(JSON.parse(k).url);


        });


    });


  }

}













