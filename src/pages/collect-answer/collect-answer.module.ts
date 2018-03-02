import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectAnswerPage } from './collect-answer';

@NgModule({
  declarations: [
    CollectAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectAnswerPage),
  ],
})
export class CollectAnswerPageModule {}
