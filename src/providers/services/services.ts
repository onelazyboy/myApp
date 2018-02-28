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
  urlHome = "http://localhost:3000/";
  url = "http://localhost:3000/";

  constructor(public httpC: Http, public jsonp: Jsonp) {
    console.log('Hello ServicesProvider Provider');
    this.http = httpC;
  }

  httpGet(tb,params) {
    params += "&r="+(new Date()).getTime().toString();
    console.log("##################"+this.url+tb+params);
    return this.http.get(this.url+tb, { search: params }).map(result => result.json());
  }

  httpPost(tb,params) {
    return this.http.post(this.url+tb, { search: params }).map(result => result.json());
  }

  jsonpGet(tb,params) {
    return this.jsonp.get(this.url+tb, { search: params }).map(result => result.json());
  }
  httpUrlHome() {
    return this.urlHome;
  }
  httpImgUrlHome() {
    return this.urlHome;
  }

}
