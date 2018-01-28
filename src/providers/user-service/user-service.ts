import { Injectable,EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  
  loading;
   //夜间模式
   isIdark: any = false;
   SetIdark: EventEmitter<number>;

  constructor(public http: Http,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello UserServiceProvider Provider');
  }

  presentLoadingDefault(){
    this.loading = this.loadingCtrl.create({
        content: '吃乎正在加载中...'
    });
    this.loading.present();
  }

  presentLoadingDismiss() {
    this.loading.dismiss();
  }

   //获取数据
   get_fork_user() {
    
   }

}
