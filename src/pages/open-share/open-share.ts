import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the OpenSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-share',
  templateUrl: 'open-share.html',
})
export class OpenSharePage {
  title = "fenxiang";
  article: any = {};
  type = 3;
  _id;
  leavewordList = [];
  pageNumber = -1;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public UserService: UserServiceProvider,public appService : ServicesProvider) {
    this.article = this.navParams.get("article");
    this.getdata();
  }

  //获取数据
  getdata() {
    this.pageNumber += 1;
    this.appService.httpGet('leaveword','articleId='+this.article.articleId+'&ps=5&pn='+this.pageNumber).subscribe(res => {
      if (res != null) {
        this.leavewordList = this.leavewordList.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenSharePage');
  }

  beforeEnter() {

  }

}
