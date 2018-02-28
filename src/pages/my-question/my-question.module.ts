import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQuestionPage } from './my-question';

@NgModule({
  declarations: [
    MyQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(MyQuestionPage),
  ],
  exports:[
    MyQuestionPage
  ]
})
export class MyQuestionPageModule {}
