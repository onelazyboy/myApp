import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotSharePage } from './hot-share';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HotSharePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HotSharePage),
  ],
})
export class HotSharePageModule {}
