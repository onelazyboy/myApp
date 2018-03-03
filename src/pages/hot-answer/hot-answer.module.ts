import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotAnswerPage } from './hot-answer';

@NgModule({
  declarations: [
    HotAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(HotAnswerPage),
  ],
})
export class HotAnswerPageModule {}
