
import { Component,Input, OnChanges } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the FoodComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'food',
  templateUrl: 'food.html'
})
export class FoodComponent {

  @Input() data:any = {};
  text: string;

  constructor() {
    console.log('Hello FoodComponent Component');
    this.text = 'Hello World';
  }

}
