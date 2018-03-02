import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySharePage } from './my-share';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MySharePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MySharePage),
  ],
  exports:[
    MySharePage
  ]
})
export class MySharePageModule {}
