import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  title = '';
  tabanimate: boolean = false;
  data: any = {};
  items:any = [];
  article=[];
  articleId = "";
  ishide:boolean = true;
  isIdark;
  pageNumber = -1;
  userId;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider,private appService : ServicesProvider ) {
    this.isIdark = this.userService.isIdark;
    this.data = this.navParams.get("article");
    this.title = this.data['title'];
    this.articleId = this.data['articleId'];
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  //获取数据
  getdata() {
    this.appService.httpGet('leaveword','&articleId='+this.articleId).subscribe(res => {
      if (res != null) {
        this.items = res;
      }
    }, err => {
      console.log(err);
    });
  }

  add(){
    if(!this.userService.user.userId){
      this.navCtrl.push('LoginPage');
      return true;
    }
    this.navCtrl.push('SendAnswerPage',{
      userId: this.userId,
      title: this.title
    });
  }
}
