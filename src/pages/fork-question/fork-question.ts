import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the ForkQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fork-question',
  templateUrl: 'fork-question.html',
})
export class ForkQuestionPage {
  data: any = [];
  rootNavCtrl: NavController;
  uid;
  isIdark;
  pageNumber = -1;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userSerVice : UserServiceProvider,private appService : ServicesProvider) {
    this.isIdark = this.userSerVice.isIdark;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    if (this.navParams.get('userId')) {
      this.uid = this.navParams.get('userId');
    } else {
      this.uid = this.userSerVice.user.userId;
    }
    this.getdata();
  }

  //获取数据
  getdata() {
    this.pageNumber += 1;
    this.appService.httpGet('article','&authorId='+this.uid).subscribe(res => {
      if (res != null) {
        this.data = this.data.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForkQuestionPage');
  }

  //打开问题
  pushQuestionPage( article ){
    this.rootNavCtrl.push('QuestionPage', {
      article: article
    });
  }

}
