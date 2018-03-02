import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../services/services';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  _init: any = {
    nickname: "管理员",
    userimg: "https://img3.duitang.com/uploads/item/201408/25/20140825012338_FwtET.jpeg",
    userId: "00000000000000000000",
    isIdark: false
  }

  //关注的人
  my_fork_user: any = [];

  user: any;

  loading;
  //夜间模式
  isIdark: any = false;

  Version = '0.0.1';

  constructor(public http: Http, public alertCtrl: AlertController,public storage: Storage, public loadingCtrl: LoadingController,
    private appService: ServicesProvider) {
    this.user = this._init;
  }

  //获取数据
  get_fork_user() {
    this.appService.httpGet('fork', 'userId=' + this.user.userId).subscribe(res => {
      if (res != null) {
        this.my_fork_user = res.json();

      }
      this.presentLoadingDismiss();
    }, err => {
      console.log(err);
    });
  }

  checkisfork(uid) {
    for (var i = 0; i < this.my_fork_user.length; i++) {
      if (this.my_fork_user[i]['userId'] == uid) {
        return true;
      }
    }
    return false;
  }

  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: '正在加载中...'
    });
    this.loading.present();
  }

  presentLoadingDismiss() {
    this.loading.dismiss();
  }

  //开启/关闭夜视功能
  setIdari(){
    this.isIdark = !this.isIdark;
    this.setDark(this.isIdark);
  }

  setDark(isdark){
    this.storage.set('isdark', isdark);
  }

  clearStorage(){
    this.storage.clear();
    this.user = this._init;
  }


}
