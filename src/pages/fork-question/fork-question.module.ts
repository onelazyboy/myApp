import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForkQuestionPage } from './fork-question';

@NgModule({
  declarations: [
    ForkQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(ForkQuestionPage),
  ],
})
export class ForkQuestionPageModule {}
