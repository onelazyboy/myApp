import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQuestionPage } from './my-question';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyQuestionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyQuestionPage),
  ],
  exports:[
    MyQuestionPage
  ]
})
export class MyQuestionPageModule {}
