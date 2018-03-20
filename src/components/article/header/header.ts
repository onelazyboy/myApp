import { Component, Input } from '@angular/core';
import { UserServiceProvider } from '../../../providers/user-service/user-service';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../../providers/services/services';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() data: any = {};
  //是否关注
  isfork: boolean = false;
  isIdark;
  
  fork: any = [];
  forkId = "";
  forkDate:any;
  date = new Date();

  private error: String = '';

  constructor(private navCtrl: NavController, private userService: UserServiceProvider, private appService: ServicesProvider) {
    this.getForkData();
  }

  pushPersonPage(userId) {
    this.navCtrl.push('PersonalPage', {
      userId: userId
    });
  }

  checkfork() {
    this.isfork = this.userService.checkisfork(this.data['authorId']);
  }

  getForkData() {
    this.appService.httpGet("fork", "userId=" + this.userService.user.userId).subscribe(
      res => {
        if (res.length > 0) {
          this.fork = this.fork.concat(res)[0];
          this.forkId = this.fork.id;
          this.isfork = true;
        }
      }
    )
  }

  forkClickEvent() {
    this.checkfork();
    if (this.isfork) {
      return true;
    }
    this.forkId = Math.ceil(Math.random() * 10) + "";
    this.forkDate = this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDate();
    this.fork = { id: this.forkId, uid: this.data.authorId, userId: this.userService.user.userId, uuserimg: this.data.authorImg, uname: this.data.author,createTime:this.forkDate };
    this.appService.httpPost("fork", this.fork).subscribe(
      res => {
        this.isfork = true;
      }, error => this.error = error
    )
  }

  unforkClickEvent() {
    if (!this.isfork) {
      return true;
    }
    this.appService.httpDelete("fork/" + this.forkId, "").subscribe(
      res => {
        this.isfork = false;
      }, error => this.error = error
    )
  }

}
