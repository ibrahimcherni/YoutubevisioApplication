import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class YoutubevisioService implements OnInit {


  url: string = ''; // to save the url that the user is searching for to watch.
  reference: string = '';  //every youtube video has this form :'https://www.youtube.com/watch?v=reference' with reference is
  // the video id
  urllist: Array<string> = []; // to save the url into the url list
  bookmarklist: Array<string> = []; // to save the url into the bookmark list


  constructor(private http: HttpClient ) {}


  ngOnInit() {}

// httpfoundation : call for database to extract the history

  getFromDatabase(): Observable<any> {

    return this.http.get('http://localhost:8000/api/history');

  }

  // httpfoundation : to post a new history in the history database : we have to post with json

  postToDatabase(url: string): Observable<any> {
    let urljson: any = {};
    urljson['url'] = url;
    /*const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');*/
    return this.http.post<string>('http://localhost:8000/api/addHistory', JSON.stringify(urljson) ) ;
  }

  // function to get the url

  getUrl() {

    return this.url;
  }

// to set new url
  setUrl(url: string) {

    if (url !== '') {

      this.url = url;

    }


  }


// to extract the video reference from url typed by a user

  getReference() {

    this.reference = this.url.substring(this.url.indexOf('=') + 1, this.url.length);
    return this.reference;

  }





// to add the url into the url list with two conditions :
  // 1 condition : if the url doesn't exist we have to add it in the local storage history
  // 2 condition : if the url exist we have to put the url in the head for url list

  addUrl(url: string) {


      if ((this.urllist.indexOf(url) < 0) && (url !== '')) {
        this.urllist = [].concat(this.urllist, url);
      }
      if (( this.urllist.indexOf(url) > 0 ) && (url !== '')) {
        this.getUrlList(url);
      }

  }

// to add the url into the bookmark list
  addToBoockmarks(bookmark: string) {

    if ((this.bookmarklist.indexOf(bookmark) < 0) && (bookmark !== '')) {
      this.bookmarklist = [].concat(this.bookmarklist, bookmark);
    }


  }

// to extract the bookmark list

  getListBookmarks() {

    return this.bookmarklist;
  }

// this function to extract the history from the database

  getListedesurlsFromdatabase() {


    let i = 0;
    this.getFromDatabase().subscribe((data: any) => {
      const segment = data.slice(1, data.length - 1).split('},{'); // slpit the data received from the data base

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

      }),  // after this past we built a list of {"id: ", "url"}

        charlist.forEach(i => {

          this.addUrl(JSON.parse(i).url); // we add each url into the url list


        });


    });


  }

// to put an order for the url list for example :
  // if you click on url in the history , this function will put it first in the history
  // if you type a url that already exists in the history , this function will identify the url among urls in the history list a
  // put in first in the function

  getUrlList( link: string ) {

    let c: string;

    if ( this.urllist.indexOf(link) > 0 ) {

      for ( let _i = this.urllist.indexOf(link); _i > 0 ; _i--) {
// permutation between elements
        c = this.urllist[_i];
        this.urllist[_i]= this.urllist[_i - 1];
        this.urllist[_i - 1] = c;

      }
    }

    return this.urllist;



  }

}













