import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the CollectWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collect-work',
  templateUrl: 'collect-work.html',
})
export class CollectWorkPage {

  //数据存储
  items = [];
  rootNavCtrl: NavController;
  userId;
  isIdark;
  pageNumber=-1;

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider,private appService : ServicesProvider) {
    this.isIdark = this.userService.isIdark;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.userId = this.navParams.data.userId;
    this.getdata();
  }

  //获取数据
  getdata() {
    this.pageNumber += 1;
    this.appService.httpGet('article','&ps=5&pn='+this.pageNumber+"&authorId="+this.userId).subscribe(res => {
      if (res != null) {
        this.items = this.items.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectWorkPage');
  }

}
