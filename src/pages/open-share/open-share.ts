import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AppServices } from '../../app/services/appServices';

/**
 * Generated class for the OpenSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-share',
  templateUrl: 'open-share.html',
})
export class OpenSharePage {
  title = "fenxiang";
  item: any = {};
  type = 3;
  _id;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public UserService: UserServiceProvider, public appService: AppServices) {
    this.item = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenSharePage');
  }

  beforeEnter(){
    
  }

}
