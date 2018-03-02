import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the MyCollectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-collect',
  templateUrl: 'my-collect.html',
})
export class MyCollectPage {
  page1: any = 'CollectWorkPage';
  page2: any = 'CollectAnswerPage';
  userId = 0;
  chatParams = {
    userId: this.userId
  };
  isIdark;

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider) {
    this.isIdark = this.userService.isIdark;
    if (this.navParams.get("userId")) {
      this.userId = this.navParams.get("userId");
      this.chatParams.userId = this.userId;
    } else {
      this.chatParams.userId = this.userService.user.userId;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCollectPage');
  }

}
