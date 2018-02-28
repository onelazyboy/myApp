import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAnswerPage } from './my-answer';

@NgModule({
  declarations: [
    MyAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAnswerPage),
  ],
  exports:[
    MyAnswerPage
  ]
})
export class MyAnswerPageModule {}
