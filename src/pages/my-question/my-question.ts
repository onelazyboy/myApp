import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MyQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-question',
  templateUrl: 'my-question.html',
})
export class MyQuestionPage {
  @ViewChild(Content) content: Content;
  items: any = [];
  uid: any;
  isIdark;
  pageNumber = -1;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider,private appService : ServicesProvider) {
    this.isIdark = this.userService.isIdark;
    if (this.navParams.get('id')) {
      this.uid = this.navParams.get('id');
    } else {
      this.uid = this.userService.user.userId;
    }
    this.getdata();
  }

  getdata(){
    this.pageNumber += 1;
    this.appService.httpGet('article','&ps=5&pn='+this.pageNumber+"&authorId="+this.uid).subscribe(res => {
      if (res != null) {
        this.items = this.items.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyQuestionPage');
  }

  tapEvent(){
    this.content.scrollToTop();
  }

}
