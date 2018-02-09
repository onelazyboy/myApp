import { Component,Input,Output } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ShareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class ShareComponent {
  @Input() data:any={};
  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello ShareComponent Component');
    this.text = 'Hello World';
  }

  pushOpenSharePage(_id) {
    this.navCtrl.push('OpenSharePage', {
      articleId: _id
    });
  }

}
