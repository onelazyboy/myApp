import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the PersonalHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-home',
  templateUrl: 'personal-home.html',
})
export class PersonalHomePage {
  userId: any;
  items: any = [];
  rootNavCtrl: NavController;
  tar: any = '';
  ishide: boolean = true;
  isIdark;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider,private appService : ServicesProvider) {
    this.isIdark = this.userService.isIdark;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.tar = this.navParams.data.tar;
    this.userId = this.navParams.data.userId;
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalHomePage');
  }

  getdata(){
    this.appService.httpGet('article', 'userId=' + this.userId).subscribe((res) => {
      console.log("#############");
      if (res != null) {
        if (res.length > 0) {
          this.ishide = false;
          this.items = this.items.concat(res);
        }
      }
      
    }, err => {
      console.log(err);
    });
  }

  pushMyWorkPage(){

  }

  pushMyAnswerPage(){

  }

  pushMyQuestionPage(){

  }

  pushMySharePage(){

  }

  pushFocusPage(){

  }

}
