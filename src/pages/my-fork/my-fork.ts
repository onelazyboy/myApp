import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the MyForkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-fork',
  templateUrl: 'my-fork.html',
})
export class MyForkPage {
  page1:any = 'ForkUserPage';
  page2:any = 'ForkQuestionPage';
  userId = 0;
  chatParams = {
    userId: this.userId
  };
  isIdark;

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider) {
    this.isIdark = this.userService.isIdark;
    if (this.navParams.get("id")) {
      this.userId = this.navParams.get("userId");
      this.chatParams.userId = this.userId;
    } else {
      this.chatParams.userId = this.userService.user.userId;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyForkPage');
  }

}
