import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWorkPage } from './my-work';

@NgModule({
  declarations: [
    MyWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(MyWorkPage),
  ],
  exports:[
    MyWorkPage
  ]
})
export class MyWorkPageModule {}
