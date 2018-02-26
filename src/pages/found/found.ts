import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AppServices } from '../../app/services/appServices';

/**
 * Generated class for the FoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {
  @ViewChild(Content) content: Content;
  //数据
  data: any = [];
  _refresher = null;
  isIdark:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserServiceProvider,
    public appService: AppServices) {
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoundPage');
  }

  //获取分享数据
  getdata() {
    this.UserService.presentLoadingDefault();
    this.appService.httpGet('tb=CmsArticle&ps=5').subscribe(res => {
      this.data = this.data.concat(res);
      if (this._refresher) {
        this._refresher.complete();
      }
      this.UserService.presentLoadingDismiss();

    }, err => {
      console.log(err);
    });
  }

  doRefresh(refresher) {

    this.data = [];
    this.getdata();

    this._refresher = refresher;

  }

  pushQueList(){

  }

  pushHotWork(){

  }
  pushHotAnswer(){

  }
  pushHotShare(){
    
  }
  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }
}
