import {Injectable} from '@angular/core';
import { Http,Jsonp } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
 export class AppServices{
     http:any;
     baseUrl:String;
     urlHome = "http://127.0.0.1:8080";
     url = "";

     constructor (http:Http,public jsonp : Jsonp ){
         this.http = http; 
         this.baseUrl = 'https://www.reddit.com/r';
         this.url= this.urlHome+"/cmsbackend/control/findTest?tb=CmsArticle&ps=3";
     }
     getPosts(category,limit){
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
        .map(res => res.json());
     }

     httpGet( params) {
        return this.http.get(this.url, {search: params}).map(result=>result.json());
      }
    
      httpPost( params) {
        return this.http.post(this.url, {search: params}).map(result=>result.json());
      }
    
      jsonpGet( params) {
        return this.jsonp.get(this.url, {search: params}).map(result=>result.json());
      }
      httpUrlHome(){
        return this.urlHome;
      }
 }