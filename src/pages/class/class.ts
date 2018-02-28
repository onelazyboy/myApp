import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {
  isIdark:any;
  data = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private appService : ServicesProvider) {
    this.getdata();
  }

  //获取数据
  getdata() {
    this.appService.httpGet('catalog','').subscribe(res => {
      console.log("######"+res);
      if (res != null) {
        this.data = this.data.concat(res);
      }
      console.log("######"+this.data);
    }, err => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');
  }

}
