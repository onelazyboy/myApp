import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the HotAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hot-answer',
  templateUrl: 'hot-answer.html',
})
export class HotAnswerPage {
  @ViewChild(Content) content: Content;
  data: any = [];
  isIdark
  constructor(public navCtrl: NavController, public navParams: NavParams,private userService:UserServiceProvider,private appService:ServicesProvider) {
    this.getdata();
    this.isIdark = this.userService.isIdark;
  }

  getdata(){
    this.userService.presentLoadingDefault();
    this.appService.httpGet("article","").subscribe(
      (res)=>{
        if(res != null){
          this.data = this.data.concat(res);
        }
        this.userService.presentLoadingDismiss();
      }
    )
  }

  tapEvent(){
    this.content.scrollToTop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotAnswerPage');
  }

}
