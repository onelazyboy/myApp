import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Http } from '@angular/http';
import { AppServices } from '../../app/services/appServices';


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
  temp: any;
  constructor(public http: Http, public UserService: UserServiceProvider, public navCtrl: NavController,
    public navParams: NavParams, public ref: ChangeDetectorRef, public appService: AppServices) {
    this.getdata();
  }

  //获取数据
  getdata() {
    this.UserService.presentLoadingDefault();
    this.appService.httpGet('tb=CmsArticle&ps=5').subscribe(res => {
      this.items = this.items.concat(res);
      if (this._refresher) {
        this._refresher.complete();
      }
      this.UserService.presentLoadingDismiss();

    }, err => {
      console.log(err);
    });

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

  openSearch() {
    this.navCtrl.push('SearchPage');
  }

  openMmessage() {
    this.checkLogin('MessagePage');
  }

  doRefresh(refresher) {
    this.old_items = this.items;
    this._refresher = refresher;
    this.getdata();
  }

  doInfinite(infiniteScroll) {

    this.getdata();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1500);
  }

  //检查登录状态
  checkLogin(page) {
    //if (this.UserService._user._id) {
    this.navCtrl.push(page);
    //} else {
    // this.navCtrl.push('LoginPage');
    //}
  }

}
