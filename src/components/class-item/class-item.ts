import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ClassItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'class-item',
  templateUrl: 'class-item.html'
})
export class ClassItemComponent {
  @Input() data:any;

  constructor(public navCtrl: NavController) {
    console.log('Hello ClassItemComponent Component');
  }

  openClass(catalog) {
    this.navCtrl.push('OpenClassPage', {
      catalog: catalog
    });
  }

}
