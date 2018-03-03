import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the QuestionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-list',
  templateUrl: 'question-list.html',
})
export class QuestionListPage {

  data: any = [];
  isIdark;

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService:UserServiceProvider,private appService:ServicesProvider) {
    this.isIdark = this.userService.isIdark;
    this.getdata();
  }

  getdata(){
    this.userService.presentLoadingDefault();
    this.appService.httpGet("article","").subscribe(
      (res) => {
        if(res != null){
          this.data = this.data.concat(res);
        }
        this.userService.presentLoadingDismiss();
      }

    )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionListPage');
  }

}
