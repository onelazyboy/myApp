import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotAnswerPage } from './hot-answer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HotAnswerPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HotAnswerPage),
  ],
})
export class HotAnswerPageModule {}
