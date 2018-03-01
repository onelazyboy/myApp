import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  isme: boolean = true;
  page1: any = 'PersonalDetailsPage';
  page2: any = 'PersonalHomePage';
  name: '';
  userimg: '';
  isIdark;
  userId = "";
  chatParams = {
    userId: this.userId,
    tar: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private UserService:UserServiceProvider,private appService : ServicesProvider) {
    this.isIdark = this.UserService.isIdark;
    if (this.navParams.get("userId")) {
      this.isme = false;
      this.userId = this.navParams.get("userId");
      this.chatParams.userId = this.userId;
      this.chatParams.tar = 'TA';
      this.UserService.presentLoadingDefault();
      this.getdata();
      this.UserService.presentLoadingDismiss();
      
    } else {
      this.chatParams.userId = this.UserService.user.userId;
      this.chatParams.tar = '我';
      this.name = this.UserService.user.nickname;
      this.userimg = this.UserService.user.userimg;
    }
    console.log("#############"+this.userimg)
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }

  //获取数据
  getdata() {
    this.appService.httpGet('users','userId'+this.userId).subscribe(res => {
      if (res != null) {
        this.name = res.json()[0].name;
        this.userimg = res.json()[0].userimg;
      }
    }, err => {
      console.log(err);
    });
  }

  chart(){
    if (this.UserService.user.userId) {
      this.navCtrl.push("ChatPage", {
        targetId: this.userId,
        targetName: this.name
      });
    } else {
      this.navCtrl.push('LoginPage');
    }
  }

}
