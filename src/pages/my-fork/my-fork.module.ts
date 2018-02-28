import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyForkPage } from './my-fork';

@NgModule({
  declarations: [
    MyForkPage,
  ],
  imports: [
    IonicPageModule.forChild(MyForkPage),
  ],
  exports:[
    MyForkPage
  ]
})
export class MyForkPageModule {}
