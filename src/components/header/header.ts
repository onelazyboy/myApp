import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  text: string;
  @Input() data: any = {};

  constructor() {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }

}
