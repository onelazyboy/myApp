import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MyWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-work',
  templateUrl: 'my-work.html',
})
export class MyWorkPage {
  @ViewChild(Content) content:Content;
  items: any = [];
  uid: any;
  isIdark;

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider,private appService : ServicesProvider) {
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
    this.appService.httpGet('article','authorId='+this.uid).subscribe(
      (res) => {
        console.log(res);
        if(res != null){
          this.items = res;
          this.userService.presentLoadingDismiss();
        }
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWorkPage');
  }

  tapEvent(){
    this.content.scrollToTop();
  }

}
