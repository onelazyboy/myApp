import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  @Input() type:any;
  text: string;

  constructor(public navCtrl : NavController) {
    console.log('Hello CommentsComponent Component');
    console.log(this.data);
    this.text = 'Hello World';
  }

  pushPersonPage(){

  }
  openComments(){
    
  }

}
