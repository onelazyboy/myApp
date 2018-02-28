import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the NoticeInformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice-inform',
  templateUrl: 'notice-inform.html',
})
export class NoticeInformPage {
  nomessage: boolean = true;
  pageNumber = -1;
  items = [];
  rootNavCtrl: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: ServicesProvider) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeInformPage');
  }

  //获取数据
  getdata() {
    this.pageNumber += 1;
    this.appService.httpGet('leaveword', 'adminId=00000000000000000000&ps=5&pn=' + this.pageNumber).subscribe(res => {
      if (res != null) {
        this.items = this.items.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }

  pushPerson(_id) {
    this.rootNavCtrl.push('PersonalPage', {
      _id: _id
    });
  }

  pushPages(type, obj) {
    switch (type) {
      case '1':
        this.rootNavCtrl.push('ArticlePage', {
          article: obj
        });
        break;
      case '2':
        this.rootNavCtrl.push('AnswerPage', {
          _id: obj
        });
        break;
      case '3':
        this.rootNavCtrl.push('OpenSharePage', {
          _id: obj
        });
        break;
      default:
        break;
    }
  }

}
