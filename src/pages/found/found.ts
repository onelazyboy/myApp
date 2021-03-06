import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

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
  pageNumber = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserServiceProvider,
    public appService: ServicesProvider) {
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoundPage');
  }

  //获取分享数据
  getdata() {
    this.UserService.presentLoadingDefault();
    this.pageNumber += 1;
    this.appService.httpGet('article','tb=CmsArticle&ps=5&pn='+this.pageNumber).subscribe(res => {
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
    this.navCtrl.push('QuestionListPage')
  }

  pushHotWork(){
    this.navCtrl.push('HotWorkPage');
  }
  pushHotAnswer(){
    this.navCtrl.push('HotAnswerPage');

  }
  pushHotShare(){
    this.navCtrl.push('HotSharePage');
    
  }
  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }
}
