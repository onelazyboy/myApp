import { Component,Input } from '@angular/core';

/**
 * Generated class for the ShareHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'share-header',
  templateUrl: 'share-header.html'
})
export class ShareHeaderComponent {

  @Input() data: any = {};

  constructor() {
  }

}
