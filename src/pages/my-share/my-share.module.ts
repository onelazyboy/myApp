import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySharePage } from './my-share';

@NgModule({
  declarations: [
    MySharePage,
  ],
  imports: [
    IonicPageModule.forChild(MySharePage),
  ],
  exports:[
    MySharePage
  ]
})
export class MySharePageModule {}
