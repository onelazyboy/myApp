import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServicesProvider {

  rong_data: EventEmitter<number>;
  // httpPostT :any = db;

  http: any;
  baseUrl: String;
  urlHome = "http://localhost:3000/";
  url = "http://localhost:3000/";

  private headers = new Headers({ 'Content-type': 'application/json' });
  private requestOptions = new RequestOptions({ headers: this.headers });

  constructor(public httpC: Http) {
    console.log('Hello ServicesProvider Provider');
    this.http = httpC;
  }


  httpGet(tb, params) {
    params += "&r=" + (new Date()).getTime().toString();
    console.log("##################" + this.url + tb + params);
    return this.http.get(this.url + tb, { search: params }).map(result => result.json());
  }

  httpPost(tb, params) {
    console.log("##################" + this.url + tb );
    return this.http.post(this.url + tb, params, this.requestOptions)
      .map(this.extractdata)
      .catch(this.handleError);
  }

  httpDelete(tb, params) {
    console.log("##################" + this.url + tb );
    return this.http.delete(this.url + tb, params, this.requestOptions)
      .map(this.extractdata)
      .catch(this.handleError);
  }

  private extractdata(res: Response) {
    const body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  httpUrlHome() {
    return this.urlHome;
  }
  httpImgUrlHome() {
    return this.urlHome;
  }

}
