import { Component,ViewChild,ChangeDetectorRef } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { WORKS } from '../../app/mock-works'
import { WorkData } from '../../app/workData';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  @ViewChild(Content) content: Content;

  item:any = {};
  id:any = 0;

   //头部导航标题
  title = '';
  //底部导航class运动控制属性
  tabanimate: boolean = false;
  //头部导航class运动控制属性
  tabbule: boolean = false;
  old_scrollTop = 0;
  conts = 0;
  isIdark
  constructor(public navCtrl: NavController, public navParams: NavParams,public UserService: UserServiceProvider,public ref: ChangeDetectorRef ) {
    this.id = this.navParams.get("_id");
    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

  //获取文章数据
  getdata() {
    this.UserService.presentLoadingDefault();
    console.log(this.id);
    this.item = WORKS[this.id];
    console.log(this.item.title);
    this.UserService.presentLoadingDismiss();
  }

  //滚动监听
  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }


    } else {
      this.tabanimate = false;
      if (!this.tabbule && scrollTop > 150) {
        this.tabbule = true;
        this.title = this.item['title'];
      }
      if (scrollTop <= 150) {
        this.tabbule = false;
        this.title = '';
      }
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }


}
