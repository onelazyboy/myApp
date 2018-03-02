import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendAnswerPage } from './send-answer';

@NgModule({
  declarations: [
    SendAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(SendAnswerPage),
  ],
})
export class SendAnswerPageModule {}
