import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetailsPage {
  isIdark;
  isme: boolean = true;
  isfork: boolean = false;
  user: any = {};
  userId = "";
  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserServiceProvider, private appService: ServicesProvider) {
    this.isIdark = this.userService.isIdark;
    this.user = this.userService.user;
    this.rootNavCtrl = navParams.get("rootNavCtrl");
    this.userId = this.navParams.get("userId");
    if (this.userService.user.userId && this.userId == this.userService.user.userId) {
      this.isme = true;
    } else {
      this.isme = false;
    }

    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDetailsPage');
  }
  //获取数据
  getdata() {
    this.userService.presentLoadingDefault();
    this.appService.httpGet('users', 'userId=' + this.userId).subscribe((res) => {
      if (res != null) {
        this.user = res[0];
      }
      if (this.userService.user.userId && !this.isme) {
        this.checkfork();
      } else {
        this.userService.presentLoadingDismiss();
      }
    }, err => {
      console.log(err);
    });
  }

  //检查是否已经关注
  checkfork() {
    this.isfork = this.userService.checkisfork(this.userId);
    this.userService.presentLoadingDismiss();
  }

  fork() {

  }

  disfork() {

  }

  baseic() {

  }

}
