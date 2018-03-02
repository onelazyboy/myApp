import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionPage } from './question';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    QuestionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(QuestionPage),
  ],
})
export class QuestionPageModule {}
