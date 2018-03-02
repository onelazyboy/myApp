import { Component,Input, OnChanges } from '@angular/core';

/**
 * Generated class for the QuestionFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-footer',
  templateUrl: 'question-footer.html'
})
export class QuestionFooterComponent implements OnChanges {
  @Input() data:any = {};
  //是否关注
  ishide: boolean = true;
  _id;

  constructor() {
    console.log('Hello QuestionFooterComponent Component');
  }

  ngOnChanges(ch){
    try {
      if (ch['data'].currentValue && ch['data'].currentValue._id) {
        //console.log( ch['data'].currentValue.uid );
        this._id = ch['data'].currentValue._id;
        this.checkfork();
      }
    } catch (error) { }
  }

  checkfork(){
    
  }

  fork(){

  }

}
