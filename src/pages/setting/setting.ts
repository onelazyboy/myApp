import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  Version = '';
  ishide: boolean = true;
  apkDownloadUrl = '';
  isIdark;
  fileTransfer: FileTransferObject;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userService : UserServiceProvider,
    private appService:ServicesProvider,public alertCtrl : AlertController,public transfer : FileTransfer,public fileOpener: FileOpener,public file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  getAppVersion(){
    this.userService.presentLoadingDefault();
    
    this.appService.httpGet("appversion","").subscribe(res=>{
      if (res.json()[0]["v"] != this.userService.Version) {
        //可升级
        this.apkDownloadUrl = res.json()[0]["url"];
        this.fileTransfer = this.transfer.create();
        this.AppV();
      } else {
        this.userService.presentLoadingDismiss();
        alert("已经是最新版了...");
      }
    })
  }

  notify(){
    this.userService.setIdari();
    this.isIdark = this.userService.isIdark;
  }

  out(){
    
    this.userService.clearStorage();
    this.navCtrl.pop();

  }

  AppV() {

    this.userService.presentLoadingDismiss();
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '是否要更新到最新版本?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.download();
          }
        }
      ]
    });

    alert.present();
  }

  //下载最新版本
  download() {
    alert("新版吃乎正在后台下载中...稍后安装");
    var _that = this;
    var apkurl = this.file.externalDataDirectory + 'chihu2.apk';
    this.fileTransfer.download(this.apkDownloadUrl, apkurl).then((entry) => {
      //打开apk
      this.fileOpener.open(apkurl, 'application/vnd.android.package-archive')
        .then(() => console.log('File is opened'))
        .catch(e => alert('Error：' + e));

    }, (error) => {
      // handle error
    });

  }

}
