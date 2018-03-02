import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the QuestionHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-header',
  templateUrl: 'question-header.html'
})
export class QuestionHeaderComponent {
  @Input() data: any;
  //是否关注
  isfork: boolean = false;

  constructor(public navCtrl: NavController, private userService: UserServiceProvider, private appService: ServicesProvider) {
    console.log('Hello QuestionHeaderComponent Component');

  }

  pushPersonPage(userId) {
    this.navCtrl.push('PersonalPage', {
      userId: userId
    });
  }

  checkfork() {
    this.isfork = this.userService.checkisfork(this.data['uid']);
  }

  fork() {
    this.checkfork();
    if (this.isfork) {
      return true;
    }
    this.userService.presentLoadingDefault();
    if (this.userService.user.userId != this.data['uid'] && this.userService.user.userId) {
      this.appService.httpGet('fork', '&ps=5&userId=' + this.userService.user.userId).subscribe(res => {
        if (res != null) {
          this.isfork = true;
        }
        this.userService.get_fork_user();
      }, err => {
        console.log(err);
      });
    } else {
      this.userService.presentLoadingDismiss();
      if (this.userService.user.userId) {
        return true;
      }
      this.navCtrl.push("LoginPage");
    }
  }

  unfork() {
    this.checkfork();
    if (!this.isfork) {
      return true;
    }
    this.userService.presentLoadingDefault();
    this.appService.httpGet("fork","uid="+this.data['uid']+"&userId="+this.userService.user.userId).subscribe(
      res => {
        if(res!=null){
        this.isfork = false;
        this.userService.get_fork_user();
        }
      }
      
    )
  }

}
