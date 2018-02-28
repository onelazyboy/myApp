import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the CommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {
  @Input() data:any;
  constructor(public navCtrl : NavController,public appService : ServicesProvider) {
    console.log('Hello CommentsComponent Component');
  }

  pushPersonPage(){

  }
  openComments(){
    
  }

}
