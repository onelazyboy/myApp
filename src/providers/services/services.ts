import { Http, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  http: any;
  baseUrl: String;
  urlHome = "http://192.168.1.188:8080";
  url = "";

  constructor(public httpC: Http, public jsonp: Jsonp) {
    console.log('Hello ServicesProvider Provider');
    this.http = httpC;
    this.baseUrl = 'https://www.reddit.com/r';
    this.url = this.urlHome + "/cmsbackend/control/findTest?";
  }

  getPosts(category, limit) {
    return this.http.get(this.baseUrl + '/' + category + '/top.json?limit=' + limit)
      .map(res => res.json());
  }

  httpGet(params) {
    return this.http.get(this.url, { search: params }).map(result => result.json());
  }

  httpPost(params) {
    return this.http.post(this.url, { search: params }).map(result => result.json());
  }

  jsonpGet(params) {
    return this.jsonp.get(this.url, { search: params }).map(result => result.json());
  }
  httpUrlHome() {
    return this.urlHome;
  }
  httpImgUrlHome() {
    return this.urlHome;
  }

}
