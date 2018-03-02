import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectAnswerPage } from './collect-answer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CollectAnswerPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CollectAnswerPage),
  ],
})
export class CollectAnswerPageModule {}
