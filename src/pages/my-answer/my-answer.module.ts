import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAnswerPage } from './my-answer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyAnswerPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyAnswerPage),
  ],
  exports:[
    MyAnswerPage
  ]
})
export class MyAnswerPageModule {}
