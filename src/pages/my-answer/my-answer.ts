import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MyAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-answer',
  templateUrl: 'my-answer.html',
})
export class MyAnswerPage {
  @ViewChild(Content)content:Content;
  isIdark;
  uid;
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider,private appServiece : ServicesProvider) {
    this.isIdark = this.userService.isIdark;
    if (this.navParams.get('userId')) {
      this.uid = this.navParams.get('userId');
    } else {
      this.uid = this.userService.user.userId;
    }
    this.getdata();
  }

  getdata(){
    this.userService.presentLoadingDefault();
    this.appServiece.httpGet('leaveword','memberId='+this.uid).subscribe(
      (res) => {
        if(res != null){
          this.items = this.items.concat(res);
          this.userService.presentLoadingDismiss();
        }
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAnswerPage');
  }
  tapEvent(){
    this.content.scrollToTop();
  }

}
