import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the QuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {
  @Input() data:any = {};
  text: string;
  isIdark;

  constructor(public navCtrl:NavController,private userService : UserServiceProvider) {
    console.log('Hello QuestionComponent Component');
    this.isIdark = this.userService.isIdark;
  }

  pushQuestionPage(articleId){
    this.navCtrl.push('QuestionPage', {
      articleId: articleId
    });
  }

}
