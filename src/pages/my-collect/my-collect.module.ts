import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCollectPage } from './my-collect';

@NgModule({
  declarations: [
    MyCollectPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCollectPage),
  ],
  exports:[
    MyCollectPage
  ]
})
export class MyCollectPageModule {}
