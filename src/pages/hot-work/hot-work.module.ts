import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotWorkPage } from './hot-work';

@NgModule({
  declarations: [
    HotWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(HotWorkPage),
  ],
})
export class HotWorkPageModule {}
