import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWorkPage } from './my-work';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MyWorkPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MyWorkPage),
  ],
  exports:[
    MyWorkPage
  ]
})
export class MyWorkPageModule {}
