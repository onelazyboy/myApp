import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the WorkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'work',
  templateUrl: 'work.html'
})
export class WorkComponent {

  @Input() data: any = {};
  @Input() ishideTitle: boolean = false;
  @Input() rootNavCtrl: any = null;

  text: string;
  irootNavCtrl: NavController;
  isIdark;
  httpUrlHome="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserServiceProvider,public appService : ServicesProvider) {
    this.isIdark = this.UserService.isIdark;
    this.irootNavCtrl = this.navCtrl;
    this.httpUrlHome = this.appService.httpUrlHome();
    console.log('Hello WorkComponent Component');
  }

  ngOnChanges(ch) {
    try {
      if (ch['rootNavCtrl'].currentValue) {
        //console.log( ch['data'].currentValue.uid );
        if (this.rootNavCtrl != null) {
          this.irootNavCtrl = this.navParams.get('rootNavCtrl');
        }
        this.ishideTitle = ch['ishideTitle'].currentValue;
      }
    } catch (error) {

    }

  }

  //打开作品
  pushArticlePage(article) {
    this.irootNavCtrl.push('ArticlePage', {
      article: article
    });
  }

  //打开回答
  pushAnswerPage(_id) {
    this.irootNavCtrl.push('AnswerPage', {
      _id: _id
    });
  }

  //打开问题
  pushQuestionPage(_id) {
    this.irootNavCtrl.push('QuestionPage', {
      _id: _id
    });
  }

}
