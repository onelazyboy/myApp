
import { Component,Input } from '@angular/core';
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
  httpUrlHome="http://127.0.0.1:8080";

  constructor() {
    console.log(this.data.content);
    console.log('Hello FoodComponent Component');
    this.text = 'Hello World';
  }

}
