
import { Component,Input } from '@angular/core';
import { ServicesProvider } from '../../providers/services/services';
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
  httpUrlHome="";

  constructor(public appServices : ServicesProvider) {
    this.httpUrlHome = this.appServices.httpUrlHome();
    console.log('Hello FoodComponent Component');
  }

}
