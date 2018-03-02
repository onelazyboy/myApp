import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the SendAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $: any;
@IonicPage()
@Component({
  selector: 'page-send-answer',
  templateUrl: 'send-answer.html',
})
export class SendAnswerPage implements OnInit {
  summernote: any;
  _id;
  title;
  text;
  isIdark;

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService :UserServiceProvider) {
    this.isIdark = this.userService.isIdark;
    this._id = this.navParams.get('id');
    this.title = this.navParams.get('title');
  }

  ngOnInit(){
    var _that = this;
    this.summernote = $('#summernote');
    this.summernote.summernote(
      {
        height: 380,
        placeholder: '文章内容...',
        callbacks: {
          onImageUpload: function (files) { //the onImageUpload API  
            var imgs = _that.upFile(files[0]);
          }
        },
        toolbar: [
          // [groupName, [list of button]]
          ['style', ['bold', 'italic']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['Insert', ['picture']]
        ]
      }
    )
  }
  upFile(file) {
    this.userService.presentLoadingDefault();
    var _data = new FormData(),
      _that = this;
    _data.append("file", file);

    $.ajax({
      data: _data,
      dataType: 'text',
      type: "POST",
      url: "https://www.devonhello.com/cfdkAdmin/uploadimg",
      cache: false,
      contentType: false,
      processData: false,
      success: function (url) {

        _that.summernote.summernote('insertImage', "https://7xp2ia.com1.z0.glb.clouddn.com/" + url, 'image name'); // the insertImage API  
        _that.userService.presentLoadingDismiss();
    }
    });
  }

  send() {
    alert("后台正在开发，暂时停止发布功能");

    // this.text = this.summernote.summernote('code');
    // if (this.text < 10) {
    //   alert("内容太短...至少10个字符");
    //   return true;
    // }
    // this.UserService.presentLoadingDefault();

    // let url = "https://www.devonhello.com/chihu2/send_answer";

    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // this.http.post(url, "uid=" + this.UserService._user._id + "&answerid=" + this._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
    //   headers: headers
    // })
    //   .subscribe((res) => {
    //     this.UserService.presentLoadingDismiss();
    //     this.navCtrl.pop();
    //   });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendAnswerPage');
  }

}
