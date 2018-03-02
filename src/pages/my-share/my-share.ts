import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MySharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-share',
  templateUrl: 'my-share.html',
})
export class MySharePage {
  @ViewChild(Content) content: Content;
  data: any = [];
  userId: any;
  isIdark;
  pageNumber= -1;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,private UserService:UserServiceProvider,private appService : ServicesProvider) {
    this.isIdark = this.UserService.isIdark;
    if (this.navParams.get("userId")) {
      this.userId = this.navParams.get("userId");
    } else {
      this.userId = this.UserService.user.userId;
    }
    this.getdata();
  }

  //获取数据
  getdata() {
    this.pageNumber += 1;
    this.appService.httpGet('article','&ps=5&pn='+this.pageNumber+"&authorId="+this.userId).subscribe(res => {
      if (res != null) {
        this.data = this.data.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySharePage');
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
