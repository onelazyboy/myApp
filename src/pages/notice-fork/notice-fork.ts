import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the NoticeForkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice-fork',
  templateUrl: 'notice-fork.html',
})
export class NoticeForkPage {
  //数据存储
  items = [];
  rootNavCtrl: NavController;
  //是否有消息class控制
  nomessage: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userService:UserServiceProvider,private appService:ServicesProvider) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  getdata(){
    this.userService.presentLoadingDefault();
    this.appService.httpGet("article","").subscribe(
      (res) =>{
        if(res !=null){
          this.items = this.items.concat(res);
        }
        this.userService.presentLoadingDismiss();
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeForkPage');
  }

  //查看TA的个人主页
  pushPerson(userId) {
    this.rootNavCtrl.push('PersonalPage', {
      userId: userId
    });
  }

}
