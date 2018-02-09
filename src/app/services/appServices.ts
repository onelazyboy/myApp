import {Injectable} from '@angular/core';
import { Http,Jsonp } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
 export class AppServices{
     http:any;
     baseUrl:String;
     url = "https://127.0.0.1:8443/cmsbackend/control/findTest?tb=CmsArticle&ps=3";

     constructor (http:Http,public jsonp : Jsonp ){
         this.http = http; 
         this.baseUrl = 'https://www.reddit.com/r';
         console.log('222');
     }
     getPosts(category,limit){
         console.log('https://www.reddit.com/r/sports/top.json?limit='+limit);
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
        .map(res => res.json());
     }

     httpGet( params) {
       console.log("#params#"+params);
        return this.http.get(this.url, {search: params}).map(result=>result.json());
      }
    
      httpPost( params) {
        return this.http.post(this.url, {search: params}).map(result=>result.json());
      }
    
      jsonpGet( params) {
        return this.jsonp.get(this.url, {search: params}).map(result=>result.json());
      }
 }