import { Component,ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
import { AppGlobal, AppService } from '../../app/app.service';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tabanimate: boolean = false;
  public old_scrollTop = 0;
  public new_scrollTop = 0;
  _refresher = null;

  isIdark;
   //数据
   items = [];
   old_items = [];
  constructor(public http: Http,public UserService: UserServiceProvider,public navCtrl: NavController, public navParams: NavParams,public ref: ChangeDetectorRef, public appService: AppService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onScroll($event: any) {

    var scrollTop = $event.scrollTop;

    if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  doRefresh(refresher) {
    this.old_items = this.items;
    this.getdata();

    this._refresher = refresher;
  }

  //获取数据
  getdata() {
    this.UserService.presentLoadingDefault();

    let url = "https://www.devonhello.com/chihu2/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.items.length, {
      headers: headers
    }).subscribe((res) => {
        if (this._refresher) {
          this._refresher.complete();
        }
        
        this.items = this.items.concat(res.json());
        if(this.old_items.length > 0){
          this.items.splice(0,this.old_items.length);
          this.old_items = [];
        }
        this.UserService.presentLoadingDismiss();
      });
  }

 

  openSearch() {
    this.navCtrl.push('SearchPage');
  }

}
