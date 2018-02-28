import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the OpenClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-class',
  templateUrl: 'open-class.html',
})
export class OpenClassPage {
  catalog:any;
  data:any = [];
  catalogName = "";
  isIdark:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private appService : ServicesProvider) {
    this.catalog = this.navParams.get("catalog");
    this.catalogName = this.catalog.catalogName;
    this.getdata(this.catalog.catalogId);
  }

   //获取数据
   getdata(catalogId) {
    this.appService.httpGet('article','catalogId='+catalogId).subscribe(res => {
      if (res != null) {
        this.data = this.data.concat(res);
      }
    }, err => {
      console.log(err);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenClassPage');
  }

  pushArticlePage(article){
    this.navCtrl.push('ArticlePage', {
      article: article
    });
  }

}
