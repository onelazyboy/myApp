import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionListPage } from './question-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    QuestionListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(QuestionListPage),
  ],
})
export class QuestionListPageModule {}
