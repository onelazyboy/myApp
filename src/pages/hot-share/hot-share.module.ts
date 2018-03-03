import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotSharePage } from './hot-share';

@NgModule({
  declarations: [
    HotSharePage,
  ],
  imports: [
    IonicPageModule.forChild(HotSharePage),
  ],
})
export class HotSharePageModule {}
