import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the NoticeThankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice-thank',
  templateUrl: 'notice-thank.html',
})
export class NoticeThankPage {
  pageNumber = -1;
  items = [];
  rootNavCtrl: NavController;
  nomessage: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: ServicesProvider) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  //获取数据
  getdata() {
    this.pageNumber += 1;
    this.appService.httpGet('like', 'adminId=00000000000000000000&ps=5&pn=' + this.pageNumber).subscribe(res => {
      if (res != null) {
        this.items = this.items.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeThankPage');
  }

  pushPersonPage(_id) {
    this.rootNavCtrl.push('PersonalPage', {
      _id: _id
    });
  }
  open(type, artid) {
    switch (type) {
      case '0':
        this.rootNavCtrl.push('AnswerPage', {
          _id: artid
        });
        break;
      case '1':
        this.rootNavCtrl.push('ArticlePage', {
          _id: artid
        });
        break;
      case '2':
        this.rootNavCtrl.push('OpenSharePage', {
          _id: artid
        });
        break;
      default:
        break;
    }
  }

}
